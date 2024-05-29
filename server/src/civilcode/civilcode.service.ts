import { Injectable } from '@nestjs/common';
import { CreateCivilcodeDto } from './dto/create-civilcode.dto';
import { UpdateCivilcodeDto } from './dto/update-civilcode.dto';

@Injectable()
export class CivilcodeService {
  create(createCivilcodeDto: CreateCivilcodeDto) {
    return 'This action adds a new civilcode';
  }

  findAll() {
    return `This action returns all civilcode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} civilcode`;
  }

  update(id: number, updateCivilcodeDto: UpdateCivilcodeDto) {
    return `This action updates a #${id} civilcode`;
  }

  remove(id: number) {
    return `This action removes a #${id} civilcode`;
  }
}
