import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './confing/database.providers';
import { PartsModule } from './parts/parts.module';
import { LawCategoryModule } from './lawCategory/category.module';
import { LawsModule } from './laws/laws.module';
import { CivilcodeModule } from './civilcode/civilcode.module';
import { CivilcodePartModule } from './civilcode-part/civilcode-part.module';
import { CivilcodeTitleModule } from './civilcode-title/civilcode-title.module';
import { CivilcodeCategoryModule } from './civilcode-category/civilcode-category.module';
import { CivilcodeLawModule } from './civilcode-law/civilcode-law.module';
import { AppDataSource } from './data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseProviders),
    UsersModule,
    PartsModule,
    LawCategoryModule,
    LawsModule,
    CivilcodePartModule,
    CivilcodeTitleModule,
    CivilcodeCategoryModule,
    CivilcodeLawModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
