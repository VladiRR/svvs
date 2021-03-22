import {createFeatureSelector, createSelector} from '@ngrx/store'
import {USER_FEATURE_KEY} from './user.reducer'
import {IUserState} from '../interfaces/user-state.interface'


export const getUserState = createFeatureSelector<IUserState>(USER_FEATURE_KEY)

export const getUser = createSelector(getUserState, state => state.user)
export const getUserLoadRun = createSelector(getUserState, state => state.userLoadRun)
export const getUserLoadFailure = createSelector(getUserState, state => state.userLoadFailure)

