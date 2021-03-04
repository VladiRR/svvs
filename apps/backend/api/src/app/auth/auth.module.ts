import { Module } from '@nestjs/common';
import { UserService } from '../users/services/user.service'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { environment } from '../../environments/environment'
import { AuthService } from './services/auth.service'
import { PasswordService } from './services/password.service'
import { JwtStrategy } from './services/jwt.strategy'
import { AuthResolver } from './resolvers/auth.resolver'

@Module({
  imports: [
    UserService,
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    JwtModule.register({
      privateKey: environment.jwt.secret,
      signOptions: {
        expiresIn: environment.jwt.expiresIn
      }
    })
  ],
  providers: [AuthService, PasswordService, JwtStrategy, AuthResolver ],
  exports: [ AuthService, PassportModule ]
})
export class AuthModule {}

