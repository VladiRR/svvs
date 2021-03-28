import {Injectable} from '@angular/core'

import {select, Store} from '@ngrx/store'

import * as UserActions from './users.actions'
import * as UserSelectors from './users.selectors'
import {IUsersFacade} from '../interfaces/users-facade.interface'
import {IUsersStoreFeatureKey} from '../interfaces/users-store-feature-key.interface'

/**
 * User store Facade
 *
 */
@Injectable()
export class BaseUsersFacade implements IUsersFacade {
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

  constructor(private store: Store<IUsersStoreFeatureKey>) {
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
