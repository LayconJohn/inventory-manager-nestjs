import { Module } from '@nestjs/common';
import { StocksOutputService } from './stocks-output.service';
import { StocksOutputController } from './stocks-output.controller';

@Module({
  controllers: [StocksOutputController],
  providers: [StocksOutputService],
})
export class StocksOutputModule {}
