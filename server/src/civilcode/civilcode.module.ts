import { Module } from '@nestjs/common';
import { CivilcodeService } from './civilcode.service';
import { CivilcodeController } from './civilcode.controller';

@Module({
  controllers: [CivilcodeController],
  providers: [CivilcodeService],
})
export class CivilcodeModule {}
