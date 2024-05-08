import { IsNumber, IsString } from 'class-validator';

export class CreateLawCategoryDto {
  @IsNumber()
  category_id: number;

  @IsString()
  category_title: string;
  
  @IsNumber()
  part_id: number;
}
