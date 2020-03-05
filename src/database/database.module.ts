import { DynamicModule, Module } from '@nestjs/common';
// import { Connection } from './connection.provider';
// import { createDatabaseProviders } from './database.providers';

// This is an example module
@Module({
    // providers: [Connection],
})
export class DatabaseModule {
    static forRoot(entities = [], options?): DynamicModule {
        // const providers = createDatabaseProviders(options, entities);
        return {
            global: true,
            module: DatabaseModule,
            // providers: providers,
            // exports: providers,
        };
    }
}