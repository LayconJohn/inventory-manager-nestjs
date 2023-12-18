import { Test, TestingModule } from '@nestjs/testing';
import { StocksOutputController } from './stocks-output.controller';
import { StocksOutputService } from './stocks-output.service';

describe('StocksOutputController', () => {
  let controller: StocksOutputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StocksOutputController],
      providers: [StocksOutputService],
    }).compile();

    controller = module.get<StocksOutputController>(StocksOutputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
