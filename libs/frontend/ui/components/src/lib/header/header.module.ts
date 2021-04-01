import {NgModule} from '@angular/core'
import {headerContainers} from './header.common'
import {NavbarModule} from '../navbar/navbar.module'


@NgModule({
  declarations: [...headerContainers],
  exports: [...headerContainers],
  imports: [
    NavbarModule,
  ],
})
export class HeaderModule {
}
