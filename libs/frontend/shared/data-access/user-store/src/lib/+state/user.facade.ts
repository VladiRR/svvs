import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as UserActions from './user.actions';
import * as UserFeature from './user.reducer';
import * as UserSelectors from './user.selectors';

@Injectable()
export class UserFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UserSelectors.getUserLoaded));
  allUser$ = this.store.pipe(select(UserSelectors.getAllUser));
  selectedUser$ = this.store.pipe(select(UserSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(UserActions.init());
  }
}
