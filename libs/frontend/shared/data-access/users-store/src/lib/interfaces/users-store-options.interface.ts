import {Type} from '@angular/core'
import {IUsersApollo} from './users-apollo.interface'
import {IUsersFacade} from './users-facade.interface'
/**
 * User-store options
 */

export interface IUsersStoreOptions {
  /**
   * User apollo service
   */
  apollo: Type<IUsersApollo>

  facade: Type<IUsersFacade>
}
