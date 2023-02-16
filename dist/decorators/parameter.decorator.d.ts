export declare const Param: <T>(payload?: {
    key?: string | undefined;
    schema?: T | undefined;
} | undefined) => ParameterDecorator;
export declare const Query: <T>(payload?: {
    key?: string | undefined;
    schema?: T | undefined;
} | undefined) => ParameterDecorator;
export declare const Req: (target: {
    [key: string]: any;
}, propertyKey: string | symbol, parameterIndex: number) => void;
export declare const Res: (target: {
    [key: string]: any;
}, propertyKey: string | symbol, parameterIndex: number) => void;
export declare const Body: <T>(payload?: {
    key?: string | undefined;
    schema?: T | undefined;
} | undefined) => ParameterDecorator;
