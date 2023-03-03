import bodyParser from 'body-parser';
import express from 'express';
import { getRouter } from '@softwarehutpl/express-zod-decorators';
import { controllers } from './src/controllers';

const app = express();

app.use(bodyParser.json());
app.use(getRouter(controllers));

app.get('/', (req: typeof express.request, res: typeof express.response) => {
  res.send('Express + TypeScript Server');
});

app.listen(3000, () => {
  console.log('️[server]: Server is running at http://localhost:3000');
});
