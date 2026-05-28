import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    private customers : Customer[] = [];     // in-memory array to store customer data

    getAllCustomers(): Customer[] {
        return this.customers;  // returns the list of all customers
    }
   
    addCustomer(createCustomerDto: CreateCustomerDto): Customer {
        const customer: Customer = {
            id: this.customers.length + 1,
            ...createCustomerDto,  // spreads the properties of the createCustomerDto object passed as an argument
        };
        this.customers.push(customer);  // adds a new customer to the array and returns it
        return customer;
    }
}
