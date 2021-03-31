import {NgModule} from '@angular/core'
import {navbarContainers} from './navbar.common'


@NgModule({
  declarations: [...navbarContainers],
  exports: [...navbarContainers],
  imports: [],
})
export class NavbarModule {
}
