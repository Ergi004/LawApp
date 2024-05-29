import { IsNumber, IsString } from "class-validator";

export class CreateCivilcodeLawDto {  
  @IsNumber()
  law_id: number
  @IsString()
  law_name: string
  @IsString()
  law_description: string
  @IsNumber()
  civilcodeCategoryCategoryId: number
}
