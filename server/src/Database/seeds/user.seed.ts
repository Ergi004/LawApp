import { Factory, Seeder } from 'typeorm-seeding';
import { DataSource } from 'typeorm';

import { User } from '../../users/entities/user.entity';
import { AppDataSource } from 'src/data-source';

export default class CreateLawCategories implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<void> {
    await AppDataSource.initialize();
    console.log(User)
    await factory(User)().create();
    await AppDataSource.destroy(); 
  }
}
