import { PartialType } from '@nestjs/mapped-types';
import { CreateCivilcodeCategoryDto } from './create-civilcode-category.dto';

export class UpdateCivilcodeCategoryDto extends PartialType(CreateCivilcodeCategoryDto) {}
