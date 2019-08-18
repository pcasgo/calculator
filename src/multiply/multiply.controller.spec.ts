import { Test, TestingModule } from '@nestjs/testing';
import { MultiplyController } from './multiply.controller';

describe('Multiply Controller', () => {
  let controller: MultiplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultiplyController],
    }).compile();

    controller = module.get<MultiplyController>(MultiplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
