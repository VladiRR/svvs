import {ModuleWithProviders, NgModule} from '@angular/core'
import {
  ICookieService,
  ICookieStorage,
  ILocalStorage,
  IMemoryStorage,
  ISessionStorage,
  IStorageOptions,
} from '@svvs/shared/utils/interfaces'
import {BaseCookieService} from './services/base-cookie.service'
import {BaseSessionStorage} from './storage/base-session.storage'
import {BaseLocalStorage} from './storage/base-local.storage'
import {BaseMemoryStorage} from './storage/base-memory.storage'
import {BaseCookieStorage} from './storage/base-cookie.storage'

@NgModule()
export class StorageModule {
  static forRoot(option: Partial<IStorageOptions> = {}): ModuleWithProviders<StorageModule> {
    return {
      ngModule: StorageModule,
      providers: [
        {
          provide: ICookieService,
          useClass: option.cookieService || BaseCookieService,
        },
        {
          provide: ICookieStorage,
          useClass: option.cookieStorage || BaseCookieStorage,
        },
        {
          provide: ISessionStorage,
          useClass: option.sessionStorage || BaseSessionStorage,
        },
        {
          provide: ILocalStorage,
          useClass: option.localStorage || BaseLocalStorage,
        },
        {
          provide: IMemoryStorage,
          useClass: option.memoryStorage || BaseMemoryStorage,
        },
      ],
    }
  }
}
