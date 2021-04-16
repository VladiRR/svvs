import {Routes} from '@angular/router'
import {HomePageBlockComponent} from './home-page-block/home-page-block.component'
import {LayoutUiComponent} from '@svvs/frontend/client/ui/layout'
import {AuthBlockComponent} from '@svvs/frontend/client/feature/auth'

export const homeRoutes: Routes = [
  {
    path: '',
    component: LayoutUiComponent,
    children: [
      {
        path: '',
        component: HomePageBlockComponent,
      },
      {
        path: 'auth',
        component: AuthBlockComponent
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('@svvs/frontend/client/feature/user-profile').then(
            (m) => m.UserProfileModule,
          ),
      },
    ],
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const homeContainers: any[] = [HomePageBlockComponent]
