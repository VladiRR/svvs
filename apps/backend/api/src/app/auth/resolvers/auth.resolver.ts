import { Query, Resolver } from '@nestjs/graphql';

import type {
  ISignAuthPayload,
  ISignAuthResponse,
} from '@svvs/shared/utils/interfaces';

import { SignIn } from '../decorators/auth.decorator';
import { AuthService } from '../services/auth.service';

/**
 * AuthResolver execute auth.graphql query
 */
@Resolver('Auth')
export class AuthResolver {
  /**
   * Inject into AuthResolver: AuthService
   *
   * @param authService validate user and return SignAuthResponse
   */
  constructor(private readonly authService: AuthService) {}

  /**
   * Implement GraphQL Query 'login'
   *
   * @param signInPayload from lib shared-data-access-interfaces
   */
  @Query('login')
  async login(
    @SignIn() signInPayload: ISignAuthPayload
  ): Promise<ISignAuthResponse> {
    return await this.authService.login(signInPayload);
  }

  /**
   * Implement GraphQL Query 'logout'
   */
  @Query('logout')
  async logout(): Promise<boolean> {
    return true;
  }
}
