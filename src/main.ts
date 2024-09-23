import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // .env faylini yuklash
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3001;
  await app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
}
bootstrap();
