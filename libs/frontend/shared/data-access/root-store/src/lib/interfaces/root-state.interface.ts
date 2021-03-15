import { RouterReducerState } from '@ngrx/router-store';
import { IRouterUrlState } from './router-url-state.interface';

/**
 * Root state for all application
 *
 * @description
 *
 * Import only those modules that should always be in the root repository.
 * By default, only the router state is loaded into the root.
 *
 * Functionality modules should be lazy loaded.
 */
export interface IRootState {
  /**
   * Router state
   */
  router: RouterReducerState<IRouterUrlState>;
}
