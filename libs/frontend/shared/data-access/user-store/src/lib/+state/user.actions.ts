import { createAction, props } from '@ngrx/store';
import { UserEntity } from './user.models';

export const init = createAction('[User Page] Init');

export const loadUserSuccess = createAction(
  '[User/API] Load User Success',
  props<{ user: UserEntity[] }>()
);

export const loadUserFailure = createAction(
  '[User/API] Load User Failure',
  props<{ error: any }>()
);
