import {createFeatureSelector, createSelector} from '@ngrx/store'

import {IUsersState} from '../interfaces/users-state.interface'
import {USERS_FEATURE_KEY} from './users.reducer'


export const getUserState = createFeatureSelector<IUsersState>(USERS_FEATURE_KEY)

export const getUser = createSelector(getUserState, state => state.user)
export const getUserLoadRun = createSelector(getUserState, state => state.userLoadRun)
export const getUserLoadFailure = createSelector(getUserState, state => state.userLoadFailure)

