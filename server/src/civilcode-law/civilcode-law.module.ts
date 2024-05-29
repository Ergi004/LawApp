import { Module } from '@nestjs/common';
import { CivilcodeLawService } from './civilcode-law.service';
import { CivilcodeLawController } from './civilcode-law.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CivilcodeLaw } from './entities/civilcode-law.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CivilcodeLaw])],
  controllers: [CivilcodeLawController],
  providers: [CivilcodeLawService],
})
export class CivilcodeLawModule {}
