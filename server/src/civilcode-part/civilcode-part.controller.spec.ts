import { Test, TestingModule } from '@nestjs/testing';
import { CivilcodePartController } from './civilcode-part.controller';
import { CivilcodePartService } from './civilcode-part.service';

describe('CivilcodePartController', () => {
  let controller: CivilcodePartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CivilcodePartController],
      providers: [CivilcodePartService],
    }).compile();

    controller = module.get<CivilcodePartController>(CivilcodePartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
