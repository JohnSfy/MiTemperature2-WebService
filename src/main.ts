import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "https://mi-temperature2-monitor-fronmt-l6kmr0y2d-eggs-projects-4b325696.vercel.app/", // ✅ Allow frontend requests
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization",
  });

  await app.listen(8000);
}
bootstrap();
