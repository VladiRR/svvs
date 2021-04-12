import {createFeatureSelector, createSelector} from '@ngrx/store'

import {IAuthState} from '../interfaces/auth-state.interface'
import {AUTH_FEATURE_KEY} from './auth.reducer'

export const getAuthState = createFeatureSelector<IAuthState>(AUTH_FEATURE_KEY)

export const getSignIn = createSelector(getAuthState, state => state.signIn)
export const getSignInRun = createSelector(getAuthState, state => state.signInRun)
export const getSignInFailure = createSelector(getAuthState, state => state.signInError)
export const getSignOutRun = createSelector(getAuthState, state => state.signOutRun)
export const getSignOutFailure = createSelector(getAuthState, state => state.signOutError)
