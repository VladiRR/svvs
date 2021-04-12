import {IAuthStorage} from './auth-storage.interface'
import {Type} from '@angular/core'
import {IAuthApollo} from './auth-apollo.interface'
import {IAuthFacade} from './auth-facade.interface'

/**
 * Auth-store interface
 */
export interface IAuthStoreOptions {

  /**
   * Auth facade
   */
  facade: Type<IAuthFacade>

  /**
   * Auth Apollo
   */
  apollo: Type<IAuthApollo>

  /**
   * Auth storage
   */
  storage: Type<IAuthStorage>
}
