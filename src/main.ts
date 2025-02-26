import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "https://mi-temperature2-monitor-fronmt-end-inky.vercel.app", // ✅ Allow frontend requests
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization",
  });

  await app.listen(8000);
}
bootstrap();
