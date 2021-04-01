import {Routes} from '@angular/router'
import {AuthUiComponent} from './auth-ui/auth-ui.component'


export const authRoutes: Routes = [
  {
    path: '',
    component: AuthUiComponent
  }
]

export const authContainers: any[] = [AuthUiComponent]
