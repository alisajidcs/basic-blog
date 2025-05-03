import { DataSource } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';
import { User } from '../../users/entities/user.entity';

export const postsSeed = async (dataSource: DataSource) => {
  const postRepository = dataSource.getRepository(Post);
  const userRepository = dataSource.getRepository(User);

  const admin = await userRepository.findOne({ where: { email: 'admin@example.com' } });
  const user = await userRepository.findOne({ where: { email: 'user@example.com' } });

  if (!admin || !user) return;

  const posts = [
    {
      title: 'Welcome to Our Blog',
      content: 'This is the first post on our blog platform.',
      author: admin,
    },
    {
      title: 'Getting Started with NestJS',
      content: 'Learn how to build scalable applications with NestJS.',
      author: admin,
    },
    {
      title: 'My First Post',
      content: 'Hello everyone! This is my first post here.',
      author: user,
    },
  ];

  for (const post of posts) {
    const existingPost = await postRepository.findOne({
      where: { title: post.title, author: { id: post.author.id } },
    });
    if (!existingPost) {
      await postRepository.save(post);
    }
  }
}; 