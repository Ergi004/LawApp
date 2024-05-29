import { PartialType } from '@nestjs/mapped-types';
import { CreateCivilcodeLawDto } from './create-civilcode-law.dto';

export class UpdateCivilcodeLawDto extends PartialType(CreateCivilcodeLawDto) {}
