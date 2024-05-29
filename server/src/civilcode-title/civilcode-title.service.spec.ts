import { Test, TestingModule } from '@nestjs/testing';
import { CivilcodeTitleService } from './civilcode-title.service';

describe('CivilcodeTitleService', () => {
  let service: CivilcodeTitleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CivilcodeTitleService],
    }).compile();

    service = module.get<CivilcodeTitleService>(CivilcodeTitleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
