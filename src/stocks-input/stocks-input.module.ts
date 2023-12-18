import { Module } from '@nestjs/common';
import { StocksInputService } from './stocks-input.service';
import { StocksInputController } from './stocks-input.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StocksInputController],
  providers: [StocksInputService],
})
export class StocksInputModule {}
