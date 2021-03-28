import {IUser, TApolloResponse} from '@svvs/shared/utils/interfaces'

/**
 * User Apollo
 */
export abstract class IUsersApollo {
  /**
   * Load current user
   */
  abstract loadUser(queryParams?: Record<string, unknown>): TApolloResponse<IUser>;
}
