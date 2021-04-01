import {NgModule} from '@angular/core'
import {homeContainers, homeRoutes} from './home.common'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [...homeContainers],
  exports: [...homeContainers],
})
export class HomeModule {
}
