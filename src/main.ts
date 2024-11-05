import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.CLIENT_URL, 'https://jokes-moderation-service.vercel.app', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
