import { createAction, props } from '@ngrx/store';

export const init = createAction('[User Page] Init');

export const loadUserSuccess = createAction(
  '[User/API] Load User Success',
  props<{ user: string }>()
);

export const loadUserFailure = createAction(
  '[User/API] Load User Failure',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props<{ error: any }>()
);
