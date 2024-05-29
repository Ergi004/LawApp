import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CivilcodePartService } from './civilcode-part.service';
import { CreateCivilcodePartDto } from './dto/create-civilcode-part.dto';
import { UpdateCivilcodePartDto } from './dto/update-civilcode-part.dto';

@Controller('civilcode-part')
export class CivilcodePartController {
  constructor(private readonly civilcodePartService: CivilcodePartService) {}

  @Post()
  create(@Body() createCivilcodePartDto: CreateCivilcodePartDto) {
    return this.civilcodePartService.create(createCivilcodePartDto);
  }

  @Get()
  findAll() {
    return this.civilcodePartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.civilcodePartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCivilcodePartDto: UpdateCivilcodePartDto) {
    return this.civilcodePartService.update(+id, updateCivilcodePartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.civilcodePartService.remove(+id);
  }
}
