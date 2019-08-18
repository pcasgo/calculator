import { Test, TestingModule } from '@nestjs/testing';
import { SubstractService } from './substract.service';

describe('SubstractService', () => {
  let service: SubstractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubstractService],
    }).compile();

    service = module.get<SubstractService>(SubstractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
