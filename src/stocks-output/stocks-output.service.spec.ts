import { Test, TestingModule } from '@nestjs/testing';
import { StocksOutputService } from './stocks-output.service';

describe('StocksOutputService', () => {
  let service: StocksOutputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StocksOutputService],
    }).compile();

    service = module.get<StocksOutputService>(StocksOutputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
