import {ExecutionContext, Injectable} from '@nestjs/common'
import {GqlExecutionContext} from '@nestjs/graphql'
import {AuthGuard} from '@nestjs/passport'

/**
 * GqlAuthGuard translate GqlExecutionContext request => UseGuard
 *
 */
@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  /**
   * getRequest return ExecutionContext as GqlExecutionContext request
   *
   * @param context
   */
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)

    return ctx.getContext().req
  }
}
