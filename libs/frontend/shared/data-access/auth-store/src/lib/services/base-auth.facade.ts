import {Injectable} from '@angular/core'

import {select, Store} from '@ngrx/store'

import {ISignAuthPayload} from '@svvs/shared/utils/interfaces'
import {IAuthFacade} from '../interfaces/auth-facade.interface'
import {IAuthStoreFeatureKey} from '../interfaces/auth-store-feature-key.interface'

import * as AuthSelectors from '../+state/auth.selectors'
import * as AuthActions from '../+state/auth.actions'

@Injectable()
export class BaseAuthFacade implements IAuthFacade {
  signIn$ = this.store.pipe(select(AuthSelectors.getSignIn))
  signInError$ = this.store.pipe(select(AuthSelectors.getSignInFailure))
  signInRun$ = this.store.pipe(select(AuthSelectors.getSignInRun))
  signOutError$ = this.store.pipe(select(AuthSelectors.getSignOutFailure))
  signOutRun$ = this.store.pipe(select(AuthSelectors.getSignOutRun))

  constructor(private store: Store<IAuthStoreFeatureKey>) {
  }

  signIn(force?: boolean): void {
    this.store.dispatch(AuthActions.signIn({payload: {force}}))
  }

  signInClear(): void {
    this.store.dispatch(AuthActions.signInClear())
  }

  signInSet(payload: ISignAuthPayload): void {
    this.store.dispatch(AuthActions.signInSet({payload}))
  }

  signOut(force?: boolean): void {
    this.store.dispatch(AuthActions.signOut({payload: {force}}))
  }

}
