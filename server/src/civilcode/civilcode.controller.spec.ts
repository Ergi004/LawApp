import { Test, TestingModule } from '@nestjs/testing';
import { CivilcodeController } from './civilcode.controller';
import { CivilcodeService } from './civilcode.service';

describe('CivilcodeController', () => {
  let controller: CivilcodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CivilcodeController],
      providers: [CivilcodeService],
    }).compile();

    controller = module.get<CivilcodeController>(CivilcodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
