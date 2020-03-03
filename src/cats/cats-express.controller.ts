import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  // Alternatives to findAll
  @Get()
  findAllUsingRequest(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}