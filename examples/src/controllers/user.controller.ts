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
    userRoles: ['UserRole', 'Roles'],
    requiredRoles: ['Required', 'Roles'],
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
