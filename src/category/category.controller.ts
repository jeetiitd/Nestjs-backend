import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService) {}  // injects the CategoryService to use its methods

    @Get()  // defines a GET endpoint for the 'category' route
    getCategories() {
        return this.categoryService.getCategories();  // calls the service method to get and return the list of categories
    }
}
