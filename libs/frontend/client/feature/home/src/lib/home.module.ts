import {NgModule} from '@angular/core'
import {homeContainers, homeRoutes} from './home.common'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes),
    EffectsModule.forRoot([]),
  ],
  declarations: [...homeContainers],
  exports: [...homeContainers],
})
export class HomeModule {
}
