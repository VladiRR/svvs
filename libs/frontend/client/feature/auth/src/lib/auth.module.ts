import {NgModule} from '@angular/core'
import {authContainers} from './auth.common'
import {AuthStoreModule} from '@svvs/frontend/shared/data-access/auth-store'

@NgModule({
  imports: [
    AuthStoreModule.forRoot(),
  ],
  exports: [...authContainers],
  declarations: [...authContainers],
})
export class AuthModule {
}
