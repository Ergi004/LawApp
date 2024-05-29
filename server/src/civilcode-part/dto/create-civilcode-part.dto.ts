
import { IsNumber, IsString } from 'class-validator';

export class CreateCivilcodePartDto {
  @IsNumber()
  part_id?: number;

  @IsString()
  part_number: string;

  @IsString()
  part_title: string;
}

