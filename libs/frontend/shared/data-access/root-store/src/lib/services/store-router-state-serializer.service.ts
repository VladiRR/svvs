import { RouterStateSerializer } from '@ngrx/router-store';
import { IRouterUrlState } from '../interfaces/router-url-state.interface';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';

/**
 * Custom RouterStateSerializer
 * See also https://ngrx.io/guide/router-store/configuration
 */
@Injectable()
export class StoreRouterStateSerializer
  implements RouterStateSerializer<IRouterUrlState> {
  /**
   * Only return an object including the URL, params and query params instead of the entire snapshot
   *
   * @param routerState
   */
  serialize(routerState: RouterStateSnapshot): IRouterUrlState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    return { url, params, queryParams };
  }
}
