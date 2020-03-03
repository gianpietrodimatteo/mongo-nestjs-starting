import { Injectable, Optional, Inject } from '@nestjs/common';

// your class may depend on a configuration object, but if none is passed, the default values should be used.
@Injectable()
export class HttpService<T> {
    constructor(
        @Optional() @Inject('HTTP_OPTIONS') private readonly httpClient: T,
    ) { }
}
// Note that in the example above we are using a custom provider, which is the reason we include the HTTP_OPTIONS custom token. 
// Previous examples showed constructor-based injection indicating a dependency through a class in the constructor.