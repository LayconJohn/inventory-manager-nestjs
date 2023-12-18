import { Module } from '@nestjs/common';
import { StocksOutputService } from './stocks-output.service';
import { StocksOutputController } from './stocks-output.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StocksOutputController],
  providers: [StocksOutputService],
})
export class StocksOutputModule {}
