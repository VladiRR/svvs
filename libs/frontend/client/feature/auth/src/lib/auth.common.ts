import {Routes} from '@angular/router'
import {AuthBlockComponent} from './auth-block/auth-block.component'


export const authRoutes: Routes = [
  {
    path: '',
    component: AuthBlockComponent
  }
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const authContainers: any[] = [AuthBlockComponent]
