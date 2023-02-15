# Introduction 

Prepare set of decorators for Express with TypeScript,  These decorators should help to implment Back-End Controller pattern in a following way:

Lets asume, we have `User` API that has following methods:

```

POST /user
Create user

example json
{
  "email": "myemail@example.org",
  "first_name": "John",
  "last_name": "Doe",
  "tags": ["new", "verified"]
}


GET /user/:userId

example json
[{
  "email": "myemail@example.org",
  "first_name": "John",
  "last_name": "Doe",
  "tags": ["new", "verified"]
}]
```


This can be implemented simply in Express with express router.

Now, in order to make it more MVC like, lets define decorator functions and try to implemnt it in that way:

```


@Controller('/user')
export default class UserController {

  @AuthGuard()
  @Get('/:userId')
  async getUser(@Response() res, @Request req, @Param userId: number) {
      res.json(MOCK_USERS[userId]);
  }

  @Post('/')
  @AuthGuard()
  @RoleGuard(['admin', 'user'])
  async createUser(@Response() res, @Request req, @Body user) { 
      const userModel = { ... user, id: MOCK_USERS.length }
      MOCK_USERS.push(userModel);
      return userModel;
  }
}
```
@Controller - creates an express router with given path, that can be used in other router, like root  application router.
@AuthGuard - middleware that check if 'Bearer xxx' is present in Authorization hedaer. If not available- return 401 http error
@RoleGuard decodes beared token and reads role from it. If role match, continue, otherwise 403 http error
@Post, @Get - makes method below an express route with given action
@Param - gets the param from URL query
@Body - gets the body from the Request

