import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}  // injects the ProductService to handle business logic
    @Get()  // defines a GET endpoint for the 'product' route
    @UseGuards(AuthGuard)  // applies the AuthGuard to this endpoint to protect it with authentication
    getProducts() {
        return this.productService.getAllProducts();  // calls the service method to get and return the list of products
    }
    @Get(':id')  // defines a GET endpoint for fetching a product by ID
    getProductById(@Param('id') id: string) {
        return this.productService.getProductById(Number(id));  // calls the service method to find and return a product by its ID
    }
}
