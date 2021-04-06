import {Routes} from '@angular/router'
import {UserProfileBlockComponent} from './user-profile-block/user-profile-block.component'


export const userProfileRoutes: Routes = [
  {
    path: '',
    component: UserProfileBlockComponent
  }
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userProfileContainers: any[] = [UserProfileBlockComponent]
