import {createAction} from '@ngrx/store'
import {ApolloError} from '@apollo/client'

import {payload, payloadForce} from '@svvs/shared/utils/store'
import {IUser} from '@svvs/shared/utils/interfaces'


export const loadUser = createAction('[IUser] Load User', payloadForce())
export const loadUserCancel = createAction(('[IUser] Load User Cancel'))
export const loadUserRun = createAction('[IUser] Load User Run')
export const loadUserSuccess = createAction('[IUser] Load User Success', payload<IUser>())
export const loadUserFailure = createAction('[IUser] Load User Failure', payload<ApolloError>())

