import 'reflect-metadata';
import { Method } from '../types/method';
import { Parameter } from '../types/parameter';
import { Route } from '../types/route';

const httpMethodDecoratorFactory = (method: Method) => {
  return (path: string): MethodDecorator => {
    return (
      target: { [key: string]: any },
      propertyKey: string | symbol,
      descriptor: PropertyDescriptor,
    ) => {
      if (!Reflect.hasMetadata('routes', target.constructor)) {
        Reflect.defineMetadata('routes', [], target.constructor);
      }
      const routes = Reflect.getMetadata('routes', target.constructor) as Array<Route>;
      routes.push({
        method,
        path,
        handlerName: propertyKey,
      });
      Reflect.defineMetadata('routes', routes, target.constructor);

      const req = Reflect.getMetadata(Parameter.req, target[propertyKey as string]);
      const res = Reflect.getMetadata(Parameter.res, target[propertyKey as string]);
      const param = Reflect.getMetadata(Parameter.param, target[propertyKey as string]);
      const query = Reflect.getMetadata(Parameter.query, target[propertyKey as string]);
      const body = Reflect.getMetadata(Parameter.body, target[propertyKey as string]);
      const original = descriptor.value;
      descriptor.value = (...args: any[]) => {
        const [request, response] = args;
        const newArgs = [...args];
        if (req) {
          newArgs[req.index] = request;
        }
        if (res) {
          newArgs[res.index] = response;
        }
        if (param) {
          const { key, index } = param;
          newArgs[index] = request.params[key];
        }
        if (query) {
          const { key, zod, index } = query;
          newArgs[index] = key ? zod.parse(request.query[key]) : zod.parse(request.query);
        }
        if (body) {
          const { zod, index } = body;
          newArgs[index] = zod.parse(request.body);
        }
        return original.apply(this, newArgs);
      }
    }
  }
}

export const Get = httpMethodDecoratorFactory(Method.get);
export const Post = httpMethodDecoratorFactory(Method.post);
export const Put = httpMethodDecoratorFactory(Method.put);
export const Delete = httpMethodDecoratorFactory(Method.delete);
