import {Inject, Injectable, PLATFORM_ID} from '@angular/core'
import {isPlatformBrowser} from '@angular/common'

import {createEffect} from '@ngrx/effects'
import {Action} from '@ngrx/store'
import {map} from 'rxjs/operators'
import {DataPersistence} from '@nrwl/angular'

import {IActionEffectPayload, IActionForcePayload, ISignAuthResponse} from '@svvs/shared/utils/interfaces'
import {AbstractEffects} from '@svvs/shared/utils/store'

import * as AuthActions from './auth.actions'
import {AUTH_FEATURE_KEY} from './auth.reducer'
import {IAuthState} from '../interfaces/auth-state.interface'
import {IAuthStoreFeatureKey} from '../interfaces/auth-store-feature-key.interface'
import {IAuthStorage} from '../interfaces/auth-storage.interface'
import {IAuthApollo} from '../interfaces/auth-apollo.interface'

@Injectable()
export class AuthEffects extends AbstractEffects<IAuthState> {

  signIn$ = createEffect(() =>
    this.dataPersistence.fetch<IActionEffectPayload<IActionForcePayload>>(AuthActions.signIn, {
      run: (action, store) => {
        return isPlatformBrowser(this.platformId) && (!this.getState(store).signInRun || action.payload.force)
          ? AuthActions.signInRun()
          : AuthActions.signInCancel()
      },
      onError: (action, error) => this.errorHandler(action, error)
    }),
  )

  signInRun$ = createEffect(() =>
  this.dataPersistence.fetch(AuthActions.signInRun, {
    id: (action, store) => this.getEffectIdFromPayload(this.getState(store).signIn),
    run: (action, store) => {
      return this.authApollo.signIn(this.getState(store).signIn).pipe(
        map<ISignAuthResponse, Action>(payload => {
          this.authStorage.setAccessToken(payload.accessToken)
          return AuthActions.signInSuccess({payload})
        })
      )
    },
    onError: (action, error) => this.errorHandler(action, error, AuthActions.signInFailure)
  })
  )

  signOut$ = createEffect(() =>
    this.dataPersistence.fetch<IActionEffectPayload<IActionForcePayload>>(AuthActions.signOut, {
      run: (action, store) => {
        return isPlatformBrowser(this.platformId) && (!this.getState(store).signOutRun || action.payload.force)
          ? AuthActions.signOutRun()
          : AuthActions.signOutCancel()
      },
      onError: (action, error) => this.errorHandler(action, error)
    }),
  )

  signOutRun$ = createEffect(() =>
    this.dataPersistence.fetch(AuthActions.signOutRun, {
      run: () => {
        return this.authApollo.signOut().pipe(
          map<void, Action>(() => {
            this.authStorage.removeAccessToken()
            return AuthActions.signOutSuccess()
          })
        )
      },
      onError: (action, error) => this.errorHandler(action, error, AuthActions.signOutFailure)
    })
  )


  constructor(
    private dataPersistence: DataPersistence<IAuthStoreFeatureKey>,
    private authStorage: IAuthStorage,
    private authApollo: IAuthApollo,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(PLATFORM_ID) protected platformId: any,
  ) {
    super(AUTH_FEATURE_KEY)
  }
}
