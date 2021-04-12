import {Action, createReducer, on} from '@ngrx/store'

import * as AuthActions from './auth.actions'
import {authInitialState} from './auth-initial-state'
import {IAuthState} from '../interfaces/auth-state.interface'

export const AUTH_FEATURE_KEY = 'auth'

const authReducer = createReducer(
  authInitialState,
  on(AuthActions.signInSet, (state, {payload}) => ({...state, signIn: payload})),
  on(AuthActions.signInClear, state => ({...state, signIn: null})),
  on(AuthActions.signInRun, state => ({...state, signInRun: true, signInError: null})),
  on(AuthActions.signInFailure, (state, {payload}) => ({...state, signInError: payload, signInRun: false})),
  on(AuthActions.signInSuccess, (state) => ({...state, signInRun: false, signInError: null})),
  on(AuthActions.signOutRun, state => ({...state, signOutRun: true, signOutError: null})),
  on(AuthActions.signOutSuccess, state => ({...state, signOutRun: false, signOutError: null})),
  on(AuthActions.signOutFailure, (state, {payload}) => ({...state, signOutRun: false, signOutError: payload})),
)

export function reducer(state: IAuthState | undefined, action: Action) {
  return authReducer(state, action)
}
