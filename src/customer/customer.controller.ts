import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}  // injects the CustomerService to handle business logic
    @Get()  // defines a GET endpoint for the 'customer' route
    getCustomers() {
        return this.customerService.getAllCustomers();  // calls the service method to get and return the list of customers
    }
    //post
    @Post()  // defines a POST endpoint for the 'customer' route
    addCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        return this.customerService.addCustomer(createCustomerDto);  // calls the service method to add a new customer and return it
    }


}
