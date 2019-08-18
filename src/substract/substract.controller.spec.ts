import { Test, TestingModule } from '@nestjs/testing';
import { SubstractController } from './substract.controller';

describe('Substract Controller', () => {
  let controller: SubstractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubstractController],
    }).compile();

    controller = module.get<SubstractController>(SubstractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
