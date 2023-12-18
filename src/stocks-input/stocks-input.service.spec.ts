import { Test, TestingModule } from '@nestjs/testing';
import { StocksInputService } from './stocks-input.service';

describe('StocksInputService', () => {
  let service: StocksInputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StocksInputService],
    }).compile();

    service = module.get<StocksInputService>(StocksInputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
