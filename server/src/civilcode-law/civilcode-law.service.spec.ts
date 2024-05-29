import { Test, TestingModule } from '@nestjs/testing';
import { CivilcodeLawService } from './civilcode-law.service';

describe('CivilcodeLawService', () => {
  let service: CivilcodeLawService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CivilcodeLawService],
    }).compile();

    service = module.get<CivilcodeLawService>(CivilcodeLawService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
