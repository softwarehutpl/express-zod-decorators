import { Method } from './method';

export type Route = {
  method: Method;
  path: string;
  handlerName: string | symbol;
};
