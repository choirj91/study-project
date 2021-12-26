import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // dto에 정의된 이외에 요소가 들어올 경우 사라짐
      // forbidNonWhitelisted: true, // dto에 정의된 이외의 요소가 들어올 경우 에러로 응답
    }),
  );

  await app.listen(3000);
}
bootstrap();
