import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CivilcodeService } from './civilcode.service';
import { CreateCivilcodeDto } from './dto/create-civilcode.dto';
import { UpdateCivilcodeDto } from './dto/update-civilcode.dto';

@Controller('civilcode')
export class CivilcodeController {
  constructor(private readonly civilcodeService: CivilcodeService) {}

  @Post()
  create(@Body() createCivilcodeDto: CreateCivilcodeDto) {
    return this.civilcodeService.create(createCivilcodeDto);
  }

  @Get()
  findAll() {
    return this.civilcodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.civilcodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCivilcodeDto: UpdateCivilcodeDto) {
    return this.civilcodeService.update(+id, updateCivilcodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.civilcodeService.remove(+id);
  }
}
