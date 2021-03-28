import {createAction} from '@ngrx/store'
import {ApolloError} from '@apollo/client'

import {payload, payloadForce} from '@svvs/shared/utils/store'
import {IUser} from '@svvs/shared/utils/interfaces'


export const loadUser = createAction('[Users] Load User', payloadForce())
export const loadUserCancel = createAction('[Users] Load User Cancel')
export const loadUserRun = createAction('[Users] Load User Run')
export const loadUserSuccess = createAction('[Users] Load User Success', payload<IUser>())
export const loadUserFailure = createAction('[Users] Load User Failure', payload<ApolloError>())

