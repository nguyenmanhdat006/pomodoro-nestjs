import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Delete,
  Get,
  Head,
  Patch,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { METHODS } from 'http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  //Pipe toàn cục để validate dữ liệu request (kết hợp class-validator & class-transformer).
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*',
    METHODS: Get,
    Head,
    Put,
    Patch,
    Post,
    Delete,
    Credential: true,
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
