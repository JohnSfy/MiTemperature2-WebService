import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { Logger } from "@nestjs/common"

async function bootstrap() {
  const logger = new Logger("Bootstrap")
  logger.log("Starting NestJS application...")

  try {
    const app = await NestFactory.create(AppModule)
    logger.log("Application created successfully")

    app.enableCors({
      origin: [
        "https://mi-temperature2-monitor-fronmt-end-inky.vercel.app",
        "http://localhost:3000",
        "http://localhost:8000",
        "http://localhost",
      ],
      methods: "GET,POST",
      allowedHeaders: "Content-Type,Authorization",
    })
    logger.log("CORS enabled")

    await app.listen(8000)
    logger.log("Application is listening on port 8000")
  } catch (error) {
    logger.error(`Failed to start application: ${error.message}`, error.stack)
    throw error
  }
}
bootstrap()
