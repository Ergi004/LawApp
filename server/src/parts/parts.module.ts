import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { PartsController } from './parts.controller';
import { Parts } from './entities/part.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Parts])],
  controllers: [PartsController],
  providers: [PartsService],
})
export class PartsModule {}
