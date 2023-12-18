import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { StocksInputModule } from './stocks-input/stocks-input.module';


@Module({
  imports: [ProductsModule, StocksInputModule],
  controllers: [AppController ],
  providers: [AppService ],
})
export class AppModule {}
