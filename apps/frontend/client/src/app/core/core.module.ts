import {NxModule} from '@nrwl/angular'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {APOLLO_OPTIONS} from 'apollo-angular'
import {HttpLink} from 'apollo-angular/http'

import {AuthStoreModule} from '@svvs/frontend/shared/data-access/auth-store'
import {RootStoreModule} from '@svvs/frontend/shared/data-access/root-store'
import {UsersStoreModule} from '@svvs/frontend/shared/data-access/users-store'

import {createApollo} from './utils/create-apollo'
import {AppComponent} from './components/app/app.component'

import {HomeModule} from '@svvs/frontend/client/feature/home'
import {coreContainers, coreRoutes} from './core.common'

@NgModule({
  declarations: [...coreContainers],
  imports: [
    NxModule.forRoot(),
    RootStoreModule,
    // HomeModule,
    RouterModule.forRoot(coreRoutes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    }]
})
export class CoreModule {
}
