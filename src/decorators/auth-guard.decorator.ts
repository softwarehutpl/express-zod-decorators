export const AuthGuard = (token: string): MethodDecorator => {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const original = descriptor.value;
    descriptor.value = (...args: any[]) => {
      const [request, response] = args;
      const headers = request.headers;
      if (headers && headers.authorization === `Bearer ${token}`) {
        return original.apply(this, args);
      }
      response.status(401).json({ error: 'Not Authorized' });
    }
  }
}
