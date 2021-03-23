import {Injectable} from '@angular/core'

import {select, Store} from '@ngrx/store'

import * as UserActions from './user.actions'
import * as UserSelectors from './user.selectors'
import {IUserFacade} from '../interfaces/user-facade.interface'
import {IUserStoreFeatureKey} from '../interfaces/user-store-feature-key.interface'

/**
 * User store Facade
 *
 */
@Injectable()
export class UserFacade implements IUserFacade {
  /**
   * get user entity
   */
  user$ = this.store.pipe(select(UserSelectors.getUser))

  /**
   * get user load error
   */
  userLoadFailure$ = this.store.pipe(select(UserSelectors.getUserLoadFailure))

  /**
   * get user load status
   */
  userLoadRun$ = this.store.pipe(select(UserSelectors.getUserLoadRun))

  constructor(private store: Store<IUserStoreFeatureKey>) {
  }

  /**
   * init(dispatch) action loadUser
   *
   * @param force Force
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loadUser(force?: boolean): void {
    this.store.dispatch(UserActions.loadUser({payload: {force: true}}))
  }

}
