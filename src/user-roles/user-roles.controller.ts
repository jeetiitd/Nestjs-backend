import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.deorator';
import { Role } from 'src/guards/roles/roles.enums';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)  // applies the RolesGuard to this endpoint to enforce role-based access control
    @Roles(Role.Admin)  // specifies that only users with the 'Admin' role can access this endpoint
    getAdminData() {
        return "Admin data fetched Successfully";  // sample response for the GET request
    }
    @Get('user-data')
    // @UseGuards(RolesGuard)
    // @Roles(Role.User)
    getUserData() {
        return "User data fetched Successfully";
    }
}
