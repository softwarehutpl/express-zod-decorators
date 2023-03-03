# 🚀 Zod decorators for ExpressJS 🚀

[![Node.js CI](https://github.com/softwarehutpl/express-zod-decorators/actions/workflows/node.js.yml/badge.svg)](https://github.com/softwarehutpl/express-zod-decorators/actions/workflows/node.js.yml)
[![Build](https://img.shields.io/github/actions/workflow/status/softwarehutpl/express-zod-decorators/node.js.yml)](https://img.shields.io/github/actions/workflow/status/softwarehutpl/express-zod-decorators/node.js.yml)
[![License: MIT](https://img.shields.io/github/license/softwarehutpl/express-zod-decorators)](https://img.shields.io/github/license/softwarehutpl/express-zod-decorators)
[![Downloads](https://img.shields.io/npm/dt/@softwarehutpl/express-zod-decorators)](https://img.shields.io/npm/dt/@softwarehutpl/express-zod-decorators)
[![Stars](https://img.shields.io/github/stars/softwarehutpl/express-zod-decorators)](https://img.shields.io/github/stars/softwarehutpl/express-zod-decorators)
[![Created by softwarehutpl](https://img.shields.io/badge/created%20by-@softwarehutpl-f05322.svg)](https://img.shields.io/badge/created%20by-@softwarehutpl-f05322.svg)

## Installation
```
npm install @softwarehutpl/express-zod-decorators --save
```

## Example of usage
```typescript
// index.ts
import express from 'express';
import { getRouter } from '@softwarehutpl/express-zod-decorators';
import UserController from './user.controller';
import BookController from './book.controller';

const app = express();
app.use(getRouter([
  UserController,
  BookController,
]));
```
```typescript
// controller.ts
import { Request, Response } from 'express';
import { z } from 'zod';
import {
  Controller,
  AuthGuard,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Req,
  Res,
  Query,
  Body,
  RoleGuard,
  Operator,
} from '@softwarehutpl/express-zod-decorators';

const ZodUser = z.object({
  id: z.string().optional(),
  name: z.coerce.string(),
  age: z.coerce.number(),
});
const ZodDeleteUser = z.object({
  id: z.string(),
});
const ZodQuery = z.object({
  q: z.coerce.number().optional(),
});

@Controller('/user')
export default class UserController {
  [key: string | symbol]: Function

  @AuthGuard('token')
  @Get('/')
  public index(
    @Res res: Response,
    @Req req: Request
  ) {
    return res.send(`user index`);
  }

  @RoleGuard({
    userRoles: ['User', 'Roles'], // all user roles
    requiredRoles: ['User'], // required roles to entrance
    operator: Operator.and, // default 'or'
  })
  @Get('/:id')
  public getUser(
    @Req req: Request,
    @Res res: Response,
    @Param({ key: 'id' }) param: string,
    @Query({ zod: ZodQuery }) query: typeof ZodQuery
  ) {
    return res.send(`param - ${param}; query - ${JSON.stringify(query)}`);
  }

  @Post('/add')
  public createUser(
    @Body({ zod: ZodUser }) body: typeof ZodUser,
    @Res res: Response
  ) {
    return res.send({ id: '1', ...body });
  }

  @Put('/update')
  public updateUser(
    @Body({ zod: ZodUser }) body: typeof ZodUser,
    @Res res: Response
  ) {
    return res.send(body);
  }

  @Delete('/delete')
  public deleteUser(
    @Body({ zod: ZodDeleteUser }) body: typeof ZodUser,
    @Res res: Response
  ) {
    return res.send(true);
  }
}
```
