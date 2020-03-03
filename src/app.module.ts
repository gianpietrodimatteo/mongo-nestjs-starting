import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { SharedController } from './shared/shared.controller';
import { CatsService } from './cats/cats.service';
import { HttpService } from './http/http.service';

@Module({
  controllers: [AppController, CatsController, SharedController],
  providers: [AppService, CatsService, HttpService],
})
export class AppModule {}
