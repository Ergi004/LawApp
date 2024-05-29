import { Injectable } from '@nestjs/common';
import { CreateCivilcodeLawDto } from './dto/create-civilcode-law.dto';
import { UpdateCivilcodeLawDto } from './dto/update-civilcode-law.dto';
import { Repository } from 'typeorm';
import { CivilcodeLaw } from './entities/civilcode-law.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CivilcodeLawService {
  constructor(
    @InjectRepository(CivilcodeLaw)
    private civilcodeLawRepository: Repository<CivilcodeLaw>,
  ) {}
  create(createCivilcodeLawDto: CreateCivilcodeLawDto) {
    const civilcodeLaw = this.civilcodeLawRepository.create(createCivilcodeLawDto);
    return this.civilcodeLawRepository.save(civilcodeLaw)
  }

  findAll() {
    return this.civilcodeLawRepository.find();
  }

  findOne(law_id: number) {
    return this.civilcodeLawRepository.findOneBy({law_id});
  }

  update(id: number, updateCivilcodeLawDto: UpdateCivilcodeLawDto) {
    return `This action updates a #${id} civilcodeLaw`;
  }

  remove(law_id: number) {
    return this.civilcodeLawRepository.delete(law_id);
  }
}
