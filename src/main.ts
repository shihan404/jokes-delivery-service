import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Replace with your client's URL or use '*' to allow all
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false, // Allow cookies if needed
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
