import { Test, TestingModule } from '@nestjs/testing';
import { CivilcodeCategoryController } from './civilcode-category.controller';
import { CivilcodeCategoryService } from './civilcode-category.service';

describe('CivilcodeCategoryController', () => {
  let controller: CivilcodeCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CivilcodeCategoryController],
      providers: [CivilcodeCategoryService],
    }).compile();

    controller = module.get<CivilcodeCategoryController>(CivilcodeCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
