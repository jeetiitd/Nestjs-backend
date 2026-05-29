import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {
    constructor(private configService: ConfigService) {}
    geturldb(){
        return this.configService.get<string>('DATABASE_URL');
    }  // injects the ConfigService to access environment variables
}
