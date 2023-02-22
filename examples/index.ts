import { defineRoutes } from './src/controlers';

const express = require('express');
const bodyParser = require('body-parser');

const app: typeof express.Express = express();

app.get('/', (req: typeof express.Request, res: typeof express.Response) => {
  res.send('Express + TypeScript Server');
});

app.use(bodyParser.json());
app.use(defineRoutes.bind(app))

app.listen(3000, () => {
  console.log('️[server]: Server is running at http://localhost:3000');
});
