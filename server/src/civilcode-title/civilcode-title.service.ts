import { Injectable } from '@nestjs/common';
import { CreateCivilcodeTitleDto } from './dto/create-civilcode-title.dto';
import { UpdateCivilcodeTitleDto } from './dto/update-civilcode-title.dto';
import { CivilcodeTitle } from './entities/civilcode-title.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CivilcodeTitleService {
  constructor(
    @InjectRepository(CivilcodeTitle)
    private civilcodeRepository: Repository<CivilcodeTitle>,
  ) {}
  create(createCivilcodeTitleDto: CreateCivilcodeTitleDto) {
    const civilcodeTitle = this.civilcodeRepository.create(
      createCivilcodeTitleDto,
    );
    return this.civilcodeRepository.save(civilcodeTitle);
  }

  findAll() {
    return this.civilcodeRepository.find();
  }

  findOne(title_id: number) {
    return this.civilcodeRepository.findOneBy({ title_id });
  }

  update(id: number, updateCivilcodeTitleDto: UpdateCivilcodeTitleDto) {
    return `This action updates a #${id} civilcodeTitle`;
  }

  remove(title_id: number) {
    return this.civilcodeRepository.delete(title_id);
  }
}
