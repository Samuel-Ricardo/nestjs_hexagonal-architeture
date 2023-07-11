import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const docConfig = new DocumentBuilder()
    .setTitle('Hexagonal Architecture')
    .setDescription(
      'API That apply Hexagonal Architecture for integrate with a CRM',
    )
    .setVersion('1.0')
    .addTag('hexagonal')
    .setContact(
      'Hexagonal Architeture - Repository',
      'https://github.com/Samuel-Ricardo/nestjs_hexagonal-architeture',
      'samuelricardoofficial@gmail.com',
    )
    .setLicense(
      'MIT',
      'https://github.com/Samuel-Ricardo/nestjs_hexagonal-architeture/blob/main/LICENSE',
    )
    .build();

  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('api', app, document);

  console.log('[SETUP] DOCS - https://localhost:3000/api');
  console.log('[SETUP] DOCS FILE - https://localhost:3000/api-json');

  await app.listen(3000);
}
bootstrap();
