import {NgModule} from '@angular/core'
import {authContainers, authRoutes} from './auth.common'
import {AuthStoreModule} from '@svvs/frontend/shared/data-access/auth-store'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    AuthStoreModule.forRoot(),
    RouterModule.forChild(authRoutes),
  ],
  exports: [...authContainers],
  declarations: [...authContainers],
})
export class AuthModule {
}
