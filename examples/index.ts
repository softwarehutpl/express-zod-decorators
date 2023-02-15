import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import { controllers } from './src/controlers';
import { Method } from './src/types/method';
import { Route } from './src/types/route';
const bodyParser = require('body-parser');

const app: Express = express();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

controllers.forEach((Controller) => {
  const instance = new Controller() as any;
  const prefix = Reflect.getMetadata('prefix', Controller);
  const routes: Array<Route> = Reflect.getMetadata('routes', Controller);

  routes.forEach((route) => {
    app[route.method as Method](prefix + route.path, (req: express.Request, res: express.Response) => {
      instance[route.handlerName](req, res);
    });
  });
});

app.listen(3000, () => {
  console.log('️[server]: Server is running at http://localhost:3000');
});
