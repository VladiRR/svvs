import {ISignAuthPayload, ISignAuthResponse, TApolloResponse} from '@svvs/shared/utils/interfaces'

/**
 * Auth Apollo interface
 */
export abstract class IAuthApollo {

  /**
   *
   * Login
   *
   * @param payload
   * @param queryParams
   */
  abstract signIn(payload: ISignAuthPayload, queryParams?: Record<string, unknown>): TApolloResponse<ISignAuthResponse>

  /**
   *
   * Logout
   *
   * @param queryParams
   */
  abstract signOut(queryParams?: Record<string, unknown>): TApolloResponse<void>
}
