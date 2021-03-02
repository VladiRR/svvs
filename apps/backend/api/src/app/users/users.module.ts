import { Module } from '@nestjs/common';
import { UserService } from './services/user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entities/user.entity'
import { UserResolver } from './resolvers/user.resolver'

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [UserService, UserResolver],
  exports: [UserService]
})
export class UsersModule {}
