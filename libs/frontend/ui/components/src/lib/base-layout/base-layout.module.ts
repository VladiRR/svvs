import {NgModule} from '@angular/core'
import {baseLayoutContainers} from './base-layout.common'
import {RouterModule} from '@angular/router'
import {HeaderModule} from '../header/header.module'


@NgModule({
  declarations: [...baseLayoutContainers],
  exports: [...baseLayoutContainers],
  imports: [
    RouterModule,
    HeaderModule,
  ],
})
export class BaseLayoutModule {
}
