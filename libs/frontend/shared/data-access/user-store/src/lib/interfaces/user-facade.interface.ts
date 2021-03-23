import {Observable} from 'rxjs'
import {IUser} from '@svvs/shared/utils/interfaces'
import {ApolloError} from '@apollo/client'

/**
 * User facade
 */
export abstract class IUserFacade {

  /**
   * User entity observer
   */
  user$: Observable<IUser>

  /**
   * User load status observer
   */
  userLoadRun$: Observable<boolean>

  /**
   * User load error observer
   */
  userLoadFailure$: Observable<ApolloError>

  /**
   * Load user action(dispatch)
   * @param force Force
   */
  abstract loadUser(force?: boolean): void
}
