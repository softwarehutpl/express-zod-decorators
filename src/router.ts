import 'reflect-metadata';
const express = require('express');
import { Route } from './';

export const getRouter = (payload: Array<any>) => {
  const router = express.Router();
  payload.forEach((Controller) => {
    const instance = new Controller();
    const prefix = Reflect.getMetadata('prefix', Controller);
    const routes: Array<Route> = Reflect.getMetadata('routes', Controller);
    routes.forEach((route) => {
      router[route.method](`${prefix}${route.path}`, (req: Request, res: Response) => {
        instance[route.handlerName](req, res);
      });
    });
  });
  return router;
};
