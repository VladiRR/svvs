import {ModuleWithProviders, NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ]
})
export class UsersStoreModule {
  static forRoot(options: Partial<IUserStoreOptions>): ModuleWithProviders<UsersStoreModule> {
    return {
      ngModule: UsersStoreModule,
      providers: []
    }
  }
}

// TODO удалить заглушку
export interface IUserStoreOptions {
  apollo: string
}
