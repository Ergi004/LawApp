import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LawCategory } from 'src/lawCategory/entities/category.entity';
import { Law } from 'src/laws/entities/law.entity';
import { Part } from 'src/parts/entities/part.entity';
import { User } from 'src/users/entities/user.entity';

export const databaseProviders: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'bgvt4ya0xxm0sm5qel8w-mysql.services.clever-cloud.com',
  username: 'uzbawwiq347ye0av',
  password: 'l4Gp4BOf3qCyg1k2AbkX',
  database: 'bgvt4ya0xxm0sm5qel8w',
  port: 3306,
  entities: [User, Part, LawCategory, Law],
  synchronize: true,
};
