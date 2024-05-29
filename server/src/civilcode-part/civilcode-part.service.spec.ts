import { Test, TestingModule } from '@nestjs/testing';
import { CivilcodePartService } from './civilcode-part.service';

describe('CivilcodePartService', () => {
  let service: CivilcodePartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CivilcodePartService],
    }).compile();

    service = module.get<CivilcodePartService>(CivilcodePartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
