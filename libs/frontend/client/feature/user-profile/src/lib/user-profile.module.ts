import {NgModule} from '@angular/core'
import {userProfileContainers} from './user-profile.common'
import {UsersStoreModule} from '@svvs/frontend/shared/data-access/users-store'


@NgModule({
  imports: [
    UsersStoreModule.forRoot(),
  ],
  exports: [...userProfileContainers],
  declarations: [...userProfileContainers],
})
export class UserProfileModule {
}
