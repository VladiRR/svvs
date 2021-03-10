import {createParamDecorator, ExecutionContext} from '@nestjs/common'

/**
 * extracts username and password from ExecutionContext
 */
export const SignIn = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const args = ctx.getArgs()[1]

  return {username: args.username, password: args.password}
})
