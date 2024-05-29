import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CivilcodeTitleService } from './civilcode-title.service';
import { CreateCivilcodeTitleDto } from './dto/create-civilcode-title.dto';
import { UpdateCivilcodeTitleDto } from './dto/update-civilcode-title.dto';

@Controller('civilcode-title')
export class CivilcodeTitleController {
  constructor(private readonly civilcodeTitleService: CivilcodeTitleService) {}

  @Post()
  create(@Body() createCivilcodeTitleDto: CreateCivilcodeTitleDto) {
    return this.civilcodeTitleService.create(createCivilcodeTitleDto);
  }

  @Get()
  findAll() {
    return this.civilcodeTitleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.civilcodeTitleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCivilcodeTitleDto: UpdateCivilcodeTitleDto) {
    return this.civilcodeTitleService.update(+id, updateCivilcodeTitleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.civilcodeTitleService.remove(+id);
  }
}
