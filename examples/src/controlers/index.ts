import { Express, Request, Response, NextFunction } from 'express';
import { Route } from '@softwarehutpl/express-zod-decorators/dist/types/route';
import UserController from './user.controller';

export const controllers = [
  UserController,
];

export function defineRoutes(this: Express, request: Request, response: Response, next: NextFunction) {
  controllers.forEach((Controller) => {
    const instance = new Controller();
    const prefix = Reflect.getMetadata('prefix', Controller);
    const routes: Array<Route> = Reflect.getMetadata('routes', Controller);
    routes.forEach((route) => {
      this[route.method](`${prefix}${route.path}`, (req: Request, res: Response) => {
        instance[route.handlerName](req, res);
      });
    });
    next();
  });
}
