import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundErrorFilter } from './not-found-error/not-found-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422
    })
  );

  app.useGlobalFilters(
    new NotFoundErrorFilter()
  )

  //pipes
  //interceptors
  //filters
  //guards
  //middlewares

  await app.listen(3000);
}
bootstrap();
