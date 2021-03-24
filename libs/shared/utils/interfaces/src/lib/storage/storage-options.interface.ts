import {Type} from '@angular/core'
import {ICookieService} from './cookie-service.interface'
import {ICookieStorage} from './cookie-storage.interface'
import {ILocalStorage} from './local-storage.interface'
import {IMemoryStorage} from './memory-storage.interface'
import {ISessionStorage} from './session-storage.interface'

/**
 * Storage options
 */
export interface IStorageOptions {
  /**
   * Cookie Service
   */
  cookieService: Type<ICookieService>

  /**
   * Cookie Storage
   */
  cookieStorage: Type<ICookieStorage>

  /**
   * Local Storage
    */
  localStorage: Type<ILocalStorage>

  /**
   * Memory Storage
   */
  memoryStorage: Type<IMemoryStorage>

  /**
   * Session Storage
   */
  sessionStorage: Type<ISessionStorage>
}
