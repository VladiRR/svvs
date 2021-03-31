import {AppComponent} from './components/app/app.component'
import {Routes} from '@angular/router'

export const coreRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('@svvs/frontend/client/feature/home').then(m => m.HomeModule)
  }
]

export const coreContainers: any[] = [AppComponent]
