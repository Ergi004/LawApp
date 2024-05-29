import { Module } from '@nestjs/common';
import { CivilcodeTitleService } from './civilcode-title.service';
import { CivilcodeTitleController } from './civilcode-title.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CivilcodeTitle } from './entities/civilcode-title.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CivilcodeTitle])],
  controllers: [CivilcodeTitleController],
  providers: [CivilcodeTitleService],
})
export class CivilcodeTitleModule {}
