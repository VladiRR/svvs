import { Query, Resolver } from '@nestjs/graphql'
import { UserService } from '../services/user.service'
import { CurrentUser } from '../decorators/user.decorator'
import { UserEntity } from '../entities/user.entity'
import { GqlAuthGuard } from '../guards/gql.auth-guard'
import { UseGuards } from '@nestjs/common'

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {
  }

  @Query('user')
  @UseGuards(GqlAuthGuard)
  async whoAmI(@CurrentUser() user: UserEntity) {
    return this.userService.findOneById(user.id)
  }

}
