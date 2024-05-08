import { Injectable } from '@nestjs/common';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { Repository } from 'typeorm';
import { Parts } from './entities/part.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PartsService {
  constructor(
    @InjectRepository(Parts)
    private partsRepository: Repository<Parts>,
  ) {}
  create(createPartDto: CreatePartDto) {
    const partAdded = this.partsRepository.create(createPartDto)
    return this.partsRepository.save(partAdded);
  }

  findAll() {
    return this.partsRepository.find();
  }

  findOne(part_id: number): Promise<Parts | null> {
    return this.partsRepository.findOneBy({ part_id });
  }

  update(part_id: number, updatePartDto: UpdatePartDto) {
    return this.partsRepository.update(part_id, updatePartDto);
  }

  async remove(part_id: number): Promise<void> {
    await this.partsRepository.delete(part_id);
  }
}
