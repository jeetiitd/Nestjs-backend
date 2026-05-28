import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './roles.enums';
import { ROLES_KEY } from './roles.deorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private relector:Reflector) {}  // injects the Reflector to access metadata set by decorators
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles =this.relector.getAllAndOverride<Role[]>(ROLES_KEY,[  // retrieves the required roles from the metadata set by the Roles decorator
      context.getHandler(),  // checks the handler (method) for metadata
      context.getClass(),  // checks the class (controller) for metadata
    ]); 
    if(!requiredRoles){  // if no roles are required, allow access
        return true;
    }
    const request=context.switchToHttp().getRequest<{ headers:Record<string,string>}>();
    const userRole=request.headers['x-user-role'] as Role;  // retrieves the user role from the HTTP request headers
    return requiredRoles.includes(userRole);  // checks if the user's role is included in the required roles and returns true if it is, otherwise false
  }

}
