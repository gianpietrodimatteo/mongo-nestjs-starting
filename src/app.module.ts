import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CommonModule } from './common/common.module';
import { HttpService } from './http/http.service';
import { LoggerMiddleware } from './logger.middleware';
import { CatsController } from './cats/cats.controller';
// import { DatabaseModule } from './database/database.module';
// import { User } from './users/entities/user.entity';


@Module({
  // imports: [CatsModule, CommonModule, DatabaseModule.forRoot([User])],
  imports: [CatsModule, CommonModule],
  // exports: [CommonModule, DatabaseModule],
  exports: [CommonModule],
  controllers: [AppController],
  providers: [AppService, HttpService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    // consumer.apply(cors(), helmet(), logger).forRoutes(CatsController);
      .apply(LoggerMiddleware) // you can apply multiple middlewares
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
      )
      // .forRoutes('cats');
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      .forRoutes(CatsController)
  }
}
