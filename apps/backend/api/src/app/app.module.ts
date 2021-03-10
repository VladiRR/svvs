import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {GraphQLModule} from '@nestjs/graphql'

import {environment} from '../environments/environment'
import {AuthModule} from './auth/auth.module'
import {UsersModule} from './users/users.module'
import {UserEntity} from './users/entities/user.entity'
import {resolverMap} from './app.resolver'
import {AppController} from './app.controller'

/**
 * Root module backend-api app
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
      entities: [UserEntity],
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({req}) => ({req}),
      playground: true,
      resolvers: [resolverMap],
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
