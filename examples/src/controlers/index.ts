import 'reflect-metadata';
import express, { Request, Response } from 'express';
// import { Route } from '@softwarehutpl/express-zod-decorators/src/types/route';
import { Route } from 'simple-node-decorators';
import UserController from './user.controller';

export const controllers = [
  UserController,
];

export const getRouter = (payload: Array<any>) => {
  const expressRouter = express.Router();
  payload.forEach((Controller) => {
    const prefix = Reflect.getMetadata('prefix', Controller);
    const routes: Array<Route> = Reflect.getMetadata('routes', Controller);
    routes.forEach((route) => {
      expressRouter[route.method](`${prefix}${route.path}`, (req: Request, res: Response) => {
        Controller[route.handlerName](req, res);
      });
    });
  });
  return expressRouter;
};



