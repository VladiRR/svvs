import {ModuleWithProviders, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'

import * as fromUser from './+state/users.reducer'
import {UsersEffects} from './+state/users.effects'
import {IUsersStoreOptions} from './interfaces/users-store-options.interface'
import {IUsersApollo} from './interfaces/users-apollo.interface'
import {IUsersFacade} from './interfaces/users-facade.interface'
import {BaseUsersFacade} from './+state/base-users-facade.service'
import {BaseUsersApollo} from './services/base-user-apollo.service'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.USERS_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
})
export class UsersStoreModule {
  static forRoot(options: Partial<IUsersStoreOptions> = {}): ModuleWithProviders<UsersStoreModule> {
    return {
      ngModule: UsersStoreModule,
      providers: [
        {
          provide: IUsersApollo,
          useClass: options.apollo || BaseUsersApollo,
        },
        {
          provide: IUsersFacade,
          useClass: options.facade || BaseUsersFacade,
        },
      ],
    }
  }
}
