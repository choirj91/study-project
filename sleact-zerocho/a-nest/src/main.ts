import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './httpException.filter';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  
  // 에러 필터
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
  .setTitle('Sleact Api')
  .setDescription('Sleact 스터디 중')
  .setVersion('1.0')
  .addTag('Sleact')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  
  await app.listen(port);
  console.log(`listening on port ${port}`);
}
bootstrap();
