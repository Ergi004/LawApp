import { Test, TestingModule } from '@nestjs/testing';
import { CivilcodeTitleController } from './civilcode-title.controller';
import { CivilcodeTitleService } from './civilcode-title.service';

describe('CivilcodeTitleController', () => {
  let controller: CivilcodeTitleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CivilcodeTitleController],
      providers: [CivilcodeTitleService],
    }).compile();

    controller = module.get<CivilcodeTitleController>(CivilcodeTitleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
