import { ActionReducerMap } from '@ngrx/store';
import { IRootState } from '../interfaces/root-state.interface';
import { routerReducer } from '@ngrx/router-store';

/**
 * Our state is composed like a map of action customerReducer functions.
 *
 * These customerReducer functions are called
 * with each dispatched action and the current or initial state
 *
 * and return a new immutable state.
 */
export const reducers: ActionReducerMap<IRootState> = {
  /**
   * Router reducer
   */
  router: routerReducer,
};
