import { Controller, Get, HostParam } from "@nestjs/common";

// Sub-domain routing
@Controller({ host: ':account.example.com' })
export class AccountController {
    @Get()
    getInfo(@HostParam('account') account: string) {
        return account;
    }
}