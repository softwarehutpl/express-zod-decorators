import 'reflect-metadata';

export const Controller = (prefix: string = ''): ClassDecorator => {
  return (target: Object) => {
    Reflect.defineMetadata('prefix', prefix, target);
    if (!Reflect.hasMetadata('routes', target)) {
      Reflect.defineMetadata('routes', [], target);
    }
  };
};
