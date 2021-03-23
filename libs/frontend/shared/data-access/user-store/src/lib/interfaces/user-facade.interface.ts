import {Observable} from 'rxjs'
import {IUser} from '@svvs/shared/utils/interfaces'

/**
 * User facade
 */
export abstract class IUserFacade {

  /**
   * User observer
   */
  user$: Observable<IUser>
}
