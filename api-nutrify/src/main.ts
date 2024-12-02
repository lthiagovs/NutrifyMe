import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
dotenv.config();

console.log('JWT_SECRET:', process.env.JWT_SECRET);


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })

  const config = new DocumentBuilder()
    .setTitle('Nutrify API')
    .setDescription('Nutrify API Documentation by Swagger')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
