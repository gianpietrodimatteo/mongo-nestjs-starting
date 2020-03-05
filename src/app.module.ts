import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CommonModule } from './common/common.module';
import { HttpService } from './http/http.service';
import { DatabaseModule } from './database/database.module';
// import { User } from './users/entities/user.entity';


@Module({
  // imports: [CatsModule, CommonModule, DatabaseModule.forRoot([User])],
  imports: [CatsModule, CommonModule],
  exports: [CommonModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, HttpService]
})
export class AppModule { }
