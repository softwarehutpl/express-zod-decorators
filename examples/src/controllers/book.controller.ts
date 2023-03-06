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

const ZodBook = z.object({
  id: z.string().optional(),
  title: z.coerce.string(),
  author: z.coerce.string(),
});
const ZodDeleteBook = z.object({
  id: z.string(),
});
const ZodQuery = z.object({
  q: z.coerce.number().optional(),
});

@Controller('/book')
export default class BookController {
  [key: string | symbol]: Function

  @AuthGuard('token')
  @Get('/')
  public index(
    @Res res: Response,
    @Req req: Request
  ) {
    return res.send(`book index`);
  }

  @RoleGuard({
    userRoles: ['UserRole', 'Roles'],
    requiredRoles: ['Required', 'Roles'],
  })
  @Get('/:id')
  public getBook(
    @Req req: Request,
    @Res res: Response,
    @Param({ key: 'id' }) param: string,
    @Query({ zod: ZodQuery }) query: typeof ZodQuery
  ) {
    return res.send(`param - ${param}; query - ${JSON.stringify(query)}`);
  }

  @Post('/add')
  public addBook(
    @Body({ zod: ZodBook }) body: typeof ZodBook,
    @Res res: Response
  ) {
    return res.send({ id: '1', ...body });
  }

  @Put('/update')
  public updateBook(
    @Body({ zod: ZodBook }) body: typeof ZodBook,
    @Res res: Response
  ) {
    return res.send(body);
  }

  @Delete('/delete')
  public deleteBook(
    @Body({ zod: ZodDeleteBook }) body: typeof ZodDeleteBook,
    @Res res: Response
  ) {
    return res.send(true);
  }
}
