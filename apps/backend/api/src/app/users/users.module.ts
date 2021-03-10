import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'

import {UserService} from './services/user.service'
import {UserEntity} from './entities/user.entity'
import {UserResolver} from './resolvers/user.resolver'

/**
 * User module contain logic user entity
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UsersModule {
}
