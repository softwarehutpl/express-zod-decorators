import { Operator } from '../types/role';
export declare const RoleGuard: ({ userRoles, requiredRoles, operator }: {
    userRoles: Array<string>;
    requiredRoles: Array<string>;
    operator?: Operator | undefined;
}) => MethodDecorator;
