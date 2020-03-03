import { Controller, Get, Header, HttpCode, Param, Post, Query, Redirect } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Controller('shared')
export class SharedController {
    @Post()
    // the response status code is always 200 by default, except for POST requests which are 201.
    @HttpCode(204)
    // just as an example, the header
    @Header('Cache-Control', 'none')
    create(): string {
        return 'This action adds a new shared';
    }

    // Redirection example
    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }

    // Async possible implementations
    @Get()
    async findAllAsyncrhonous(): Promise<any[]> {
        return [];
    }

    @Get()
    findAllAsyncrhonousObservable(): Observable<any[]> {
        return of([]);
    }

    // You can also use param this way
    @Get(':id')
    findOneAlternative(@Param() params): string {
        console.log(params.id);
        return `This action returns a #${params.id} of shared`;
    }
}

