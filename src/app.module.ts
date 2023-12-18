import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { StocksInputModule } from './stocks-input/stocks-input.module';
import { StocksOutputModule } from './stocks-output/stocks-output.module';


@Module({
  imports: [ProductsModule, StocksInputModule, StocksOutputModule],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {}
