import {Inject, Injectable, PLATFORM_ID} from '@angular/core'
import {isPlatformBrowser} from '@angular/common'
import {DataPersistence} from '@nrwl/angular'
import {Action} from '@ngrx/store'
import {createEffect} from '@ngrx/effects'
import {map} from 'rxjs/operators'

import {IActionEffectPayload, IActionForcePayload, IUser} from '@svvs/shared/utils/interfaces'
import {AbstractEffects} from '@svvs/shared/utils/store'

import {IUsersApollo} from '../interfaces/users-apollo.interface'
import {USERS_FEATURE_KEY} from './users.reducer'
import * as UserActions from './users.actions'
import {IUsersStoreFeatureKey} from '../interfaces/users-store-feature-key.interface'
import {IUsersState} from '../interfaces/users-state.interface'

@Injectable()
export class UsersEffects extends AbstractEffects<IUsersState> {
  loadUser$ = createEffect(() =>
    this.dataPersistence.fetch<IActionEffectPayload<IActionForcePayload>>(UserActions.loadUser, {
      run: (action, store) =>
        isPlatformBrowser(this.platformId) && (!this.getState(store).userLoadRun || action.payload.force)
          ? UserActions.loadUserRun()
          : UserActions.loadUserCancel(),
      onError: (action, error) => this.errorHandler(action, error),
    }),
  )

  loadUserRun$ = createEffect(() =>
    this.dataPersistence.fetch(UserActions.loadUserRun, {
      run: action =>
        this.userApollo.loadUser().pipe(
          map<IUser, Action>(payload => UserActions.loadUserSuccess({payload})),
        ),
      onError: (action, error) => this.errorHandler(action, error, UserActions.loadUserFailure),
    }),
  )

  constructor(
    private dataPersistence: DataPersistence<IUsersStoreFeatureKey>,
    private userApollo: IUsersApollo,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    super(USERS_FEATURE_KEY)
  }
}
