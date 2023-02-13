const MockUserRoles = ['User'];

export const RoleGuard = (role: string): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const original = descriptor.value;
    descriptor.value = (...args: any[]) => {
      const [, response] = args;
      const hasUserRole = MockUserRoles.some((item) => item === role);
      if (hasUserRole) {
        return original.apply(this, args);
      }
      response.status(403).json({ error: 'Forbidden' });
    }
  }
}
