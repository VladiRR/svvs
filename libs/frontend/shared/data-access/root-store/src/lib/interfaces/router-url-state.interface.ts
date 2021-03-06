import { Params } from '@angular/router';

/**
 * Router state URL
 */
export interface IRouterUrlState {
  /**
   * URL
   */
  url: string;

  /**
   * Route params
   */
  params: Params;

  /**
   * Route query params
   */
  queryParams: Params;
}
