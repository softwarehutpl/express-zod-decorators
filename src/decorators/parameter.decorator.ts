import 'reflect-metadata';
import { Parameter } from '../types/parameter';

const paramWithKeyDecoratorFactory = (parameter: Parameter) => {
  return <T>(payload?: { key?: string, schema?: T }): ParameterDecorator => {
    return (
      target: { [key: string]: any },
      propertyKey: string | symbol,
      parameterIndex: number,
    ) => {
      const metadataTarget = target[propertyKey as string];
      const metadataValue = {
        key: payload?.key as string,
        schema: payload?.schema as T,
        index: parameterIndex as number,
      } as object;
      Reflect.defineMetadata(parameter, metadataValue, metadataTarget);
    }
  }
}

const paramDecoratorFactory = (parameter: Parameter) => {
  return (
    target: { [key: string]: any },
    propertyKey: string | symbol,
    parameterIndex: number,
  ) => {
    const metadataTarget = target[propertyKey as string];
    Reflect.defineMetadata(parameter, { index: parameterIndex }, metadataTarget);
  }
}

export const Param = paramWithKeyDecoratorFactory(Parameter.param);
export const Query = paramWithKeyDecoratorFactory(Parameter.query);
export const Req = paramDecoratorFactory(Parameter.req);
export const Res = paramDecoratorFactory(Parameter.res);
export const Body = paramWithKeyDecoratorFactory(Parameter.body);
