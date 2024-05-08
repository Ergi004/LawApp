import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LawCategory } from 'src/lawCategory/entities/category.entity';
import { Laws } from 'src/laws/entities/law.entity';
import { Parts } from 'src/parts/entities/part.entity';
import { User } from 'src/users/entities/user.entity';

export const databaseProviders: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'Ergi',
  password: '1234',
  database: 'LawApp',
  entities: [User, Parts, LawCategory, Laws],
  synchronize: true,
};
