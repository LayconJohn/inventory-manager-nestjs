import { Test, TestingModule } from '@nestjs/testing';
import { StocksInputController } from './stocks-input.controller';
import { StocksInputService } from './stocks-input.service';

describe('StocksInputController', () => {
  let controller: StocksInputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StocksInputController],
      providers: [StocksInputService],
    }).compile();

    controller = module.get<StocksInputController>(StocksInputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
