import { DataSource } from 'typeorm';
import { usersSeed } from './users.seed';
import { postsSeed } from './posts.seed';

export const runSeeds = async (dataSource: DataSource) => {
  try {
    console.log('Running seeds...');
    
    await usersSeed(dataSource);
    console.log('Users seeded successfully');
    
    await postsSeed(dataSource);
    console.log('Posts seeded successfully');
    
    console.log('All seeds completed successfully');
  } catch (error) {
    console.error('Error running seeds:', error);
    throw error;
  }
}; 