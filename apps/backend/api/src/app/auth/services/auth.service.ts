import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import {
  ISignAuthPayload,
  ISignAuthResponse,
} from '@svvs/shared/utils/interfaces';
import { environment } from '../../../environments/environment';

import { UserService } from '../../users/services/user.service';
import { PasswordService } from './password.service';
import { UserEntity } from '../../users/entities/user.entity';

/**
 * This AuthService validate user and return SignAuthResponse
 */
@Injectable()
export class AuthService {
  /**
   * Inject into AuthService: JwtService, UserService, PasswordService
   *
   * @param jwtService Implements interaction with JWT
   * @param userService Implements interaction with the user entity
   * @param passwordService Implements interaction with bcrypt and compare password
   */
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly passwordService: PasswordService
  ) {}

  /**
   * Validate users
   *
   * @param username
   * @param pass
   */
  async validateUser(
    username: string,
    pass: string
  ): Promise<Omit<UserEntity, 'password'>> {
    const user = await this.userService.findOneByUserName(username);

    const isValid = user
      ? await this.passwordService.compareHash(pass, user.password)
      : false;

    if (isValid) {
      delete user.password;

      return user;
    }
    return null;
  }

  /**
   * Return SignAuthResponse data
   *
   * @param signInPayload Incoming login data
   */
  async login(signInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
    const user = await this.validateUser(
      signInPayload.username,
      signInPayload.password
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, userId: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
      expiresIn: new Date(environment.jwt.expiresIn).getDate(),
      id: user.id,
    };
  }
}
