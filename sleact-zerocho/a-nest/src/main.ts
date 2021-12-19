import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import path from 'path';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  );
  app.enableCors({
    origin: true,
    credentials: true
  });
  app.useStaticAssets(
    process.env.NODE_ENV === 'production'
      ? path.join(__dirname, '..', '..', 'uploads')
      : path.join(__dirname, '..', 'uploads'),
    {
      prefix: '/uploads'
    }
  );
  app.useStaticAssets(
    process.env.NODE_ENV === 'production'
      ? path.join(__dirname, '..', '..', 'public')
      : path.join(__dirname, '..', 'public'),
    {
      prefix: '/dist'
    }
  );
  const config = new DocumentBuilder()
    .setTitle('Sleact API')
    .setDescription('Sleact 개발을 위한 API 문서입니다.')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());
  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true
      }
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  const PORT = process.env.PORT || 3095;
  await app.listen(PORT);
  console.log(`server listening on port ${PORT}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

/* NestJs LifeCycle */
/* https://slides.com/yariv-gilad/nest-js-request-lifecycle/fullscreen#/1 */

// Incoming request
// Globally bound middleware
// Module bound middleware
// Global guards
// Controller guards
// Route guards
// Global interceptors (pre-controller)
// Controller interceptors (pre-controller)
// Route interceptors (pre-controller)
// Global pipes
// Controller pipes
// Route pipes
// Route parameter pipes
// Controller (method handler)
// Service (if exists)
// Route interceptor (post-request)
// Controller interceptor (post-request)
// Global interceptor (post-request)
// Exception filters (route, then controller, then global)
// Server response
