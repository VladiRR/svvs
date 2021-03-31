import {Routes} from '@angular/router'
import {HomePageUiComponent} from './home-page-ui/home-page-ui.component'


export const homeRoutes: Routes = [
  {
    path: '',
    component: HomePageUiComponent
  }
]

export const homeContainers: any[] = [HomePageUiComponent]
