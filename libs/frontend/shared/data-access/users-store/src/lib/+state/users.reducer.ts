import {Action, createReducer, on} from '@ngrx/store'

import {IUsersState} from '../interfaces/users-state.interface'
import * as UserActions from './users.actions'
import {usersInitialState} from './users-initial-state'


export const USERS_FEATURE_KEY = 'user'

const usersReducer = createReducer(
  usersInitialState,
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


export function reducer(state: IUsersState | undefined, action: Action) {
  return usersReducer(state, action)
}
