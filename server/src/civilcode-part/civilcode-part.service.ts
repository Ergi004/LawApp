import { Injectable } from '@nestjs/common';
import { CreateCivilcodePartDto } from './dto/create-civilcode-part.dto';
import { UpdateCivilcodePartDto } from './dto/update-civilcode-part.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CivilcodePart } from './entities/civilcode-part.entity';

@Injectable()
export class CivilcodePartService {
  constructor(
    @InjectRepository(CivilcodePart)
    private civilCodePartReposiotry: Repository<CivilcodePart>,
  ) {}
  create(createCivilcodePartDto: CreateCivilcodePartDto) {
    const civilCodePart = this.civilCodePartReposiotry.create(
      createCivilcodePartDto,
    );
    return this.civilCodePartReposiotry.save(civilCodePart);
  }

  findAll() {
    return this.civilCodePartReposiotry.find();
  }

  findOne(part_id: number): Promise<CivilcodePart | null> {
    return this.civilCodePartReposiotry.findOneBy({ part_id });
  }

  update(id: number, updateCivilcodePartDto: UpdateCivilcodePartDto) {
    return `This action updates a #${id} civilcodePart`;
  }

  remove(part_id: number) {
    return this.civilCodePartReposiotry.delete(part_id);
  }
}
