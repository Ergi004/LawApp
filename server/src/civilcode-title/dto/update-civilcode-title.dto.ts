import { PartialType } from '@nestjs/mapped-types';
import { CreateCivilcodeTitleDto } from './create-civilcode-title.dto';

export class UpdateCivilcodeTitleDto extends PartialType(CreateCivilcodeTitleDto) {}
