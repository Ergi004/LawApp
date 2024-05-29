import { Test, TestingModule } from '@nestjs/testing';
import { CivilcodeLawController } from './civilcode-law.controller';
import { CivilcodeLawService } from './civilcode-law.service';

describe('CivilcodeLawController', () => {
  let controller: CivilcodeLawController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CivilcodeLawController],
      providers: [CivilcodeLawService],
    }).compile();

    controller = module.get<CivilcodeLawController>(CivilcodeLawController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
