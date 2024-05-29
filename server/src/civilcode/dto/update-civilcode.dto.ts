import { PartialType } from '@nestjs/mapped-types';
import { CreateCivilcodeDto } from './create-civilcode.dto';

export class UpdateCivilcodeDto extends PartialType(CreateCivilcodeDto) {}
