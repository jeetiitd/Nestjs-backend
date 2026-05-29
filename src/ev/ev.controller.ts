import { Controller, Get } from '@nestjs/common';
import { EvService } from './ev.service';

@Controller('ev')
export class EvController {
    constructor(private readonly evService: EvService) {}  // injects the EvService to use its methods

    @Get('url')  // defines a GET endpoint for the 'ev/url' route
    getDatabaseUrl() {
        return this.evService.geturldb();  // calls the service method to get and return the database URL from environment variables
    }
}
