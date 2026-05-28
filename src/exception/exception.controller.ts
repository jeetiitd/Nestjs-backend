import { Controller, Get, HttpException, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('exception')
@UseFilters(HttpExceptionFilter)  // applies the HttpExceptionFilter to this controller to handle exceptions
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id',ParseIntPipe) id: number) {  // defines a GET endpoint that takes an 'id' parameter and parses it as an integer
        return { message: `Hello, your ID is ${id}` };  // returns a message with the provided ID}
    }
}