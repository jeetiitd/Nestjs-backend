import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method}]-[${req.originalUrl}]`)  // logs the HTTP method and URL of the incoming request, then calls
    next();
  }
}
