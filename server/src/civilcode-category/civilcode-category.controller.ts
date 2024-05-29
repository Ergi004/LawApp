import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CivilcodeCategoryService } from './civilcode-category.service';
import { CreateCivilcodeCategoryDto } from './dto/create-civilcode-category.dto';
import { UpdateCivilcodeCategoryDto } from './dto/update-civilcode-category.dto';

@Controller('civilcode-category')
export class CivilcodeCategoryController {
  constructor(private readonly civilcodeCategoryService: CivilcodeCategoryService) {}

  @Post()
  create(@Body() createCivilcodeCategoryDto: CreateCivilcodeCategoryDto) {
    return this.civilcodeCategoryService.create(createCivilcodeCategoryDto);
  }

  @Get()
  findAll() {
    return this.civilcodeCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.civilcodeCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCivilcodeCategoryDto: UpdateCivilcodeCategoryDto) {
    return this.civilcodeCategoryService.update(+id, updateCivilcodeCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.civilcodeCategoryService.remove(+id);
  }
}
