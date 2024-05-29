import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LawCategory } from '../lawCategory/entities/category.entity';
import { Law } from '../laws/entities/law.entity';
import { Part } from '../parts/entities/part.entity';
import { User } from '../users/entities/user.entity';
import { CivilcodeCategory } from '../civilcode-category/entities/civilcode-category.entity';
import { CivilcodeLaw } from '../civilcode-law/entities/civilcode-law.entity';
import { CivilcodePart } from '../civilcode-part/entities/civilcode-part.entity';
import { CivilcodeTitle } from '../civilcode-title/entities/civilcode-title.entity';
import { DataSourceOptions } from 'typeorm';

export const databaseProviders: TypeOrmModuleOptions & DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'Admin',
  password: '1234',
  database: 'LawApp',
  port: 3306,
  entities: [
    User,
    Part,
    LawCategory,
    Law,
    CivilcodeCategory,
    CivilcodePart,
    CivilcodeLaw,
    CivilcodeTitle,
  ],
  synchronize: true,
  autoLoadEntities: true
};
