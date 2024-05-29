import { IsNumber, IsString } from "class-validator";

export class CreateCivilcodeTitleDto {
  @IsNumber()
  title_id: number
  @IsString()
  title: string
  @IsString()
  title_number: string
  @IsNumber()
  civilcodePartPartId: number
}
