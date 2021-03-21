import { TApolloResponse } from '@svvs/shared/utils/interfaces';

/**
 * User Apollo
 */
export abstract class IUserApollo {
  /**
   * Load current user
   */
  abstract loadUser(queryParams: Record<string, unknown>): TApolloResponse;
}
