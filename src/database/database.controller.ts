import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
    constructor(private readonly databaseService: DatabaseService) {}  // injects the DatabaseService to use its methods

    @Get('status')  // defines a GET endpoint for the 'database/status' route
    getDatabaseStatus() {
        return this.databaseService.getStatus();  // calls the service method to get and return the current status of the database connection
    }
}
