import { Controller, Get } from '@nestjs/common';

@Controller('user')  // dectorator to define the route prefix for this controller
export class UserController {
   @Get()  // decorator to define a GET endpoint for this route
   getUser() {
      return "User data fetched Successfully";  // sample response for the GET request
   }
}
