import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'My First Blog Post'
  })
  title: string;

  @ApiProperty({
    description: 'The content of the post',
    example: 'This is the content of my first blog post...'
  })
  content: string;
} 