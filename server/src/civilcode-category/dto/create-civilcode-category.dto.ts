import { IsNumber, IsString } from "class-validator";

export class CreateCivilcodeCategoryDto {
  @IsNumber()
  category_id: number
  @IsString()
  category_name: string
  @IsString()
  category_number: string
  @IsNumber()
  civilcodeTitleTitleId: number
}
