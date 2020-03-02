import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // you don't need to specify a type unless you actually want to access the underlying platform API.
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
