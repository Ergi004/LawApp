import { Test, TestingModule } from '@nestjs/testing';
import { CivilcodeService } from './civilcode.service';

describe('CivilcodeService', () => {
  let service: CivilcodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CivilcodeService],
    }).compile();

    service = module.get<CivilcodeService>(CivilcodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
