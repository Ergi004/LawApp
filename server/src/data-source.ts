import { DataSource } from 'typeorm';
import { databaseProviders } from './confing/database.providers';

export const AppDataSource = new DataSource({
  ...databaseProviders,
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  subscribers: [__dirname + '/subscribers/*{.ts,.js}'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
