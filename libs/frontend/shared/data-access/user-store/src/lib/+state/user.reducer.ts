import {Action, createReducer, on} from '@ngrx/store'

import {IUserState} from '../interfaces/user-state.interface'
import * as UserActions from './user.actions'
import {userInitialState} from './user-initial-state'


export const USER_FEATURE_KEY = 'user'

const userReducer = createReducer(
  userInitialState,
  on(UserActions.loadUserRun, state => ({
    ...state,
    userLoadRun: true,
    userLoadFailure: null,
  })),
  on(UserActions.loadUserSuccess, (state, {payload}) => ({
    ...state,
    user: payload,
    userLoadRun: false,
  })),
  on(UserActions.loadUserFailure, (state, {payload}) => ({
    ...state,
    userLoadRun: false,
    userLoadFailure: payload,
  })),
)


export function reducer(state: IUserState | undefined, action: Action) {
  return userReducer(state, action)
}
