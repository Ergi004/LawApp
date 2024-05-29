import { PartialType } from '@nestjs/mapped-types';
import { CreateCivilcodePartDto } from './create-civilcode-part.dto';

export class UpdateCivilcodePartDto extends PartialType(CreateCivilcodePartDto) {}
