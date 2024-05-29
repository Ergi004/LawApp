import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CivilcodeLawService } from './civilcode-law.service';
import { CreateCivilcodeLawDto } from './dto/create-civilcode-law.dto';
import { UpdateCivilcodeLawDto } from './dto/update-civilcode-law.dto';

@Controller('civilcode-law')
export class CivilcodeLawController {
  constructor(private readonly civilcodeLawService: CivilcodeLawService) {}

  @Post()
  create(@Body() createCivilcodeLawDto: CreateCivilcodeLawDto) {
    return this.civilcodeLawService.create(createCivilcodeLawDto);
  }

  @Get()
  findAll() {
    return this.civilcodeLawService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.civilcodeLawService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCivilcodeLawDto: UpdateCivilcodeLawDto) {
    return this.civilcodeLawService.update(+id, updateCivilcodeLawDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.civilcodeLawService.remove(+id);
  }
}
