import {IAuthStorage} from './auth-storage.interface'
import {Type} from '@angular/core'


export interface IAuthStoreOptions {


  /**
   * Auth storage
   */
  storage: Type<IAuthStorage>
}
