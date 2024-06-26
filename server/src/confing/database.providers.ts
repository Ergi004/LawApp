import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LawCategory } from 'src/lawCategory/entities/category.entity';
import { Law } from 'src/laws/entities/law.entity';
import { Part } from 'src/parts/entities/part.entity';
import { User } from 'src/users/entities/user.entity';

export const databaseProviders: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'Ergi',
  password: '1234',
  database: 'LawApp',
  port: 3306,
  entities: [User, Part, LawCategory, Law],
  synchronize: true,
};
