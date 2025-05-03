import 'dotenv/config';
import { DataSource } from 'typeorm';
import { runSeeds } from './index';
import databaseConfig from '../../config/database.config';
import { User } from '../../users/entities/user.entity';
import { Post } from '../../posts/entities/post.entity';

async function run() {
  const config = databaseConfig();
  const dataSource = new DataSource({
    ...config,
    type: 'postgres' as const,
    entities: [User, Post],
  });

  try {
    await dataSource.initialize();
    await runSeeds(dataSource);
    await dataSource.destroy();
    process.exit(0);
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
}

run(); 