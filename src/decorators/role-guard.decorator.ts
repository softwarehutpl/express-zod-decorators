import { Operator } from '../types/role';

const hasAccess = (payload: {
  userRoles: Array<string> | string,
  requiredRoles: Array<string> | string,
  operator: Operator.and | Operator.or,
}) => {
  const userRoles = Array.isArray(payload.userRoles) ? payload.userRoles : [payload.userRoles];
  const requiredRoles = Array.isArray(payload.requiredRoles) ? payload.requiredRoles : [payload.requiredRoles];
  if (payload.operator === Operator.and) {
    return userRoles.every((item) => requiredRoles.includes(item));
  }
  return userRoles.some((item) => requiredRoles.includes(item));
};

export const RoleGuard = ({ userRoles, requiredRoles, operator = Operator.or }: {
  userRoles: Array<string>,
  requiredRoles: Array<string>,
  operator?: Operator.and | Operator.or,
}): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const original = descriptor.value;
    descriptor.value = (...args: any[]) => {
      const [, response] = args;
      const hasRoles = hasAccess({ userRoles, requiredRoles, operator });
      if (hasRoles) {
        return original.apply(this, args);
      }
      return response.status(403).json({ error: 'Forbidden' });
    }
  }
}
