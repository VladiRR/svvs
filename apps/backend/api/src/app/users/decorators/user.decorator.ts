import {createParamDecorator, ExecutionContext} from '@nestjs/common'

/**
 * Extract context from ExecutionContext
 */
export const CurrentUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  return ctx
})
