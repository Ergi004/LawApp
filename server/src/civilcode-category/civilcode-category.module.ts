import { Module } from '@nestjs/common';
import { CivilcodeCategoryService } from './civilcode-category.service';
import { CivilcodeCategoryController } from './civilcode-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CivilcodeCategory } from './entities/civilcode-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CivilcodeCategory])],
  controllers: [CivilcodeCategoryController],
  providers: [CivilcodeCategoryService],
})
export class CivilcodeCategoryModule {}
