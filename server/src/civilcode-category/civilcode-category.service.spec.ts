import { Test, TestingModule } from '@nestjs/testing';
import { CivilcodeCategoryService } from './civilcode-category.service';

describe('CivilcodeCategoryService', () => {
  let service: CivilcodeCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CivilcodeCategoryService],
    }).compile();

    service = module.get<CivilcodeCategoryService>(CivilcodeCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
