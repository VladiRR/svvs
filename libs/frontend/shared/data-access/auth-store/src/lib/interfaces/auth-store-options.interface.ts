import {IAuthStorage} from './auth-storage.interface'
import {Type} from '@angular/core'
import {IAuthApollo} from './auth-apollo.interface'


export interface IAuthStoreOptions {

  /**
   * Auth Apollo
   */
  apollo: Type<IAuthApollo>

  /**
   * Auth storage
   */
  storage: Type<IAuthStorage>
}
