import { Test, TestingModule } from '@nestjs/testing';
import { DivideService } from './divide.service';

describe('DivideService', () => {
  let service: DivideService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DivideService],
    }).compile();

    service = module.get<DivideService>(DivideService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
