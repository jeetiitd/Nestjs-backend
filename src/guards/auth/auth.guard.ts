import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request=context.switchToHttp().getRequest();  // retrieves the HTTP request object from the execution context
    const authHeader=request.headers['authorization'];  // checks if the authorization header is present and starts with 'Bearer '
    
    return authHeader===`bearer my-secret-token`;  // compares the token in the authorization header with a predefined token and returns true if they match, otherwise false
    return true;
  }
}
