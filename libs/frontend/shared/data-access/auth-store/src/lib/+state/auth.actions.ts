import {createAction, props} from '@ngrx/store'
import {AuthEntity} from './auth.models'

export const init = createAction('[Auth Page] Init')

export const loadAuthSuccess = createAction(
  '[Auth/API] Load Auth Success',
  props<{ auth: AuthEntity[] }>(),
)

export const loadAuthFailure = createAction(
  '[Auth/API] Load Auth Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>(),
)
