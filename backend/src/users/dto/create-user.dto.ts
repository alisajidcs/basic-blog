import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'john.doe@example.com'
  })
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123'
  })
  password: string;

  @ApiProperty({
    description: 'The first name of the user',
    example: 'John'
  })
  firstName: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe'
  })
  lastName: string;
} 