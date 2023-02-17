import express, { Express, Request, Response } from 'express';
import { defineRoutes } from './src/controlers';

const bodyParser = require('body-parser');

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(bodyParser.json());
app.use(defineRoutes.bind(app))

app.listen(3000, () => {
  console.log('️[server]: Server is running at http://localhost:3000');
});
