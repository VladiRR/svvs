import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'

import { AppController } from './app.controller'
import { environment } from '../environments/environment'
import { AuthModule } from './auth/auth.module'
import { resolverMap } from './app.resolver'
import { UserEntity } from './users/entities/user.entity'
import { UsersModule } from './users/users.module'

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
