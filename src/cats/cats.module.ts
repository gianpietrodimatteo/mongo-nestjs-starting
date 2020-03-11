import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';

// If we put @Global() here everything that's exported is going to be
// available to the rest of the project without needing to import cats module
// @Global
@Module({
    imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})
export class CatsModule { }
