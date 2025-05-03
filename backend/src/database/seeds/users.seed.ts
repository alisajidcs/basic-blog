import { DataSource } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import * as bcrypt from 'bcrypt';

export const usersSeed = async (dataSource: DataSource) => {
  const userRepository = dataSource.getRepository(User);

  const users = [
    {
      email: 'admin@example.com',
      password: await bcrypt.hash('admin123', 10),
      firstName: 'Admin',
      lastName: 'User',
    },
    {
      email: 'user@example.com',
      password: await bcrypt.hash('user123', 10),
      firstName: 'Regular',
      lastName: 'User',
    },
  ];

  for (const user of users) {
    const existingUser = await userRepository.findOne({ where: { email: user.email } });
    if (!existingUser) {
      await userRepository.save(user);
    }
  }
}; 