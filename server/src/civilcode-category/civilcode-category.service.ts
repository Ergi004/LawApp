import { Injectable } from '@nestjs/common';
import { CreateCivilcodeCategoryDto } from './dto/create-civilcode-category.dto';
import { UpdateCivilcodeCategoryDto } from './dto/update-civilcode-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CivilcodeCategory } from './entities/civilcode-category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CivilcodeCategoryService {
  constructor(
    @InjectRepository(CivilcodeCategory)
    private civilcodeCategory: Repository<CivilcodeCategory>,
  ) {}
  create(createCivilcodeCategoryDto: CreateCivilcodeCategoryDto) {
    const civilcodeCategory = this.civilcodeCategory.create(
      createCivilcodeCategoryDto,
    );
    return this.civilcodeCategory.save(civilcodeCategory);
  }

  findAll() {
    return this.civilcodeCategory.find;
  }

  findOne(category_id: number) {
    return this.civilcodeCategory.findOneBy({ category_id });
  }

  update(id: number, updateCivilcodeCategoryDto: UpdateCivilcodeCategoryDto) {
    return `This action updates a #${id} civilcodeCategory`;
  }

  remove(category_id: number) {
    return this.civilcodeCategory.delete(category_id);
  }
}
