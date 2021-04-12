import {ISignAuthPayload} from '@svvs/shared/utils/interfaces'
import {ApolloError} from '@apollo/client'

/**
 * Login-logout auth interface
 */
export interface IAuthState {

  /**
   * Login action data
   */
  signIn: ISignAuthPayload

  /**
   * Login action status
   */
  signInRun: boolean

  /**
   * Login action error
   */
  signInError: ApolloError

  /**
   * Logout action status
   */
  signOutRun: boolean

  /**
   * Logout action error
   */
  signOutError: ApolloError
}
