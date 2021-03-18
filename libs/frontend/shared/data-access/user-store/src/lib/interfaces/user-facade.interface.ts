import {Observable} from 'rxjs'
import {IUser} from '@svvs/shared/data-access/interfaces'

/**
 * User facade
 */
export abstract class IUserFacade {

  /**
   * User observer
   */
  user$: Observable<IUser>
}
