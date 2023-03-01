import { controllers } from './src/controlers';
const { getRouter } = require('@softwarehutpl/express-zod-decorators');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req: typeof express.Request, res: typeof express.Response) => {
  res.send('Express + TypeScript Server');
});

app.use(getRouter(controllers));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('️[server]: Server is running at http://localhost:3000');
});
