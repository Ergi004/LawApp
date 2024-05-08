import { Module } from '@nestjs/common';
import { LawsService } from './laws.service';
import { LawsController } from './laws.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Laws } from './entities/law.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Laws])],
  controllers: [LawsController],
  providers: [LawsService],
})
export class LawsModule {}
