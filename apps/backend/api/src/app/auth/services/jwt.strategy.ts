import {Injectable} from '@nestjs/common'
import {ExtractJwt, Strategy} from 'passport-jwt'
import {PassportStrategy} from '@nestjs/passport'

import {environment} from '../../../environments/environment'

/**
 * Implements interaction with standard passport-jwt methods
 * and return validate data
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * provide super
   */
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.jwt.secret,
    })
  }

  /**
   * Return validate data
   * @param payload
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validate(payload: any) {
    return {userId: payload.sub, username: payload.username}
  }
}
