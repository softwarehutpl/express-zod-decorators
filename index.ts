import { AuthGuard } from './src/decorators/auth-guard.decorator';
import { Controller } from './src/decorators/controller.decorator';
import * as httpMethodDecorators from './src/decorators/http-method.decorator';
import * as parameterDecorators from './src/decorators/parameter.decorator';
import { RoleGuard } from './src/decorators/role-guard.decorator';

module.exports = {
    AuthGuard,
    Controller,
    ...httpMethodDecorators,
    ...parameterDecorators,
    RoleGuard,
};
