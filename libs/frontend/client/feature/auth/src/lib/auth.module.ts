import {NgModule} from '@angular/core'
import {authContainers} from './auth.common'
import {AuthStoreModule} from '@svvs/frontend/shared/data-access/auth-store'
import {LoginFormModule} from '@svvs/frontend/client/ui/login-form'

@NgModule({
  imports: [
    AuthStoreModule.forRoot(),
    LoginFormModule,
  ],
  exports: [...authContainers],
  declarations: [...authContainers],
})
export class AuthModule {
}
