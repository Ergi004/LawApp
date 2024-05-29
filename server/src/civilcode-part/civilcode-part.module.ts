import { Module } from '@nestjs/common';
import { CivilcodePartService } from './civilcode-part.service';
import { CivilcodePartController } from './civilcode-part.controller';
import { CivilcodePart } from './entities/civilcode-part.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CivilcodePart])],
  controllers: [CivilcodePartController],
  providers: [CivilcodePartService],
})
export class CivilcodePartModule {}
