import {NgModule} from '@angular/core'
import {userProfileContainers, userProfileRoutes} from './user-profile.common'
import {UsersStoreModule} from '@svvs/frontend/shared/data-access/users-store'
import {RouterModule} from '@angular/router'


@NgModule({
  imports: [
    UsersStoreModule.forRoot(),
    RouterModule.forChild(userProfileRoutes)
  ],
  exports: [...userProfileContainers],
  declarations: [...userProfileContainers],
})
export class UserProfileModule {
}
