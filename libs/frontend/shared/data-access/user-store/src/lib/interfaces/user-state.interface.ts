import {IUser} from '@svvs/shared/utils/interfaces'
import {ApolloError} from '@apollo/client'

/**
 * User-state interface
 */
export interface IUserState {
  /**
   * User entity
   */
  user: IUser

  /**
   * User load status
   */
  userLoadRun: boolean

  /**
   * User load error
   */
  userLoadFailure: ApolloError
}
