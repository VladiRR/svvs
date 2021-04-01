import {NgModule} from '@angular/core'
import {navbarContainers} from './navbar.common'
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [...navbarContainers],
  exports: [...navbarContainers],
  imports: [
    RouterModule,
  ],
})
export class NavbarModule {
}
