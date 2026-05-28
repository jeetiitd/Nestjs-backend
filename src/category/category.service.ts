import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getCategories() {
        return ['Mobile', 'Laptop', 'Tablet'];  // returns a list of sample categories
    }
}
