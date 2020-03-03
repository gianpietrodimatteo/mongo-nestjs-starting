import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { SharedController } from './shared/shared.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, SharedController],
  providers: [AppService],
})
export class AppModule {}
