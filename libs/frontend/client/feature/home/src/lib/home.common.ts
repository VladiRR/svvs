import {Routes} from '@angular/router'
import {HomePageBlockComponent} from './home-page-block/home-page-block.component'
import {BaseLayoutUiComponent} from '@svvs/frontend/ui/components'


export const homeRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutUiComponent,
    children: [
      {
        path: '',
        component: HomePageBlockComponent
      },
      {
        path: 'auth',
        loadChildren: () => import('@svvs/frontend/client/feature/auth').then(m => m.AuthModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('@svvs/frontend/client/feature/user-profile').then(m => m.UserProfileModule)
      }
    ]
  }
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const homeContainers: any[] = [HomePageBlockComponent]
