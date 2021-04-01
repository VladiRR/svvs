import {NxModule} from '@nrwl/angular'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {APOLLO_OPTIONS} from 'apollo-angular'
import {HttpLink} from 'apollo-angular/http'
import {RootStoreModule} from '@svvs/frontend/shared/data-access/root-store'

import {createApollo} from './utils/create-apollo'
import {coreContainers, coreRoutes} from './core.common'
import {EffectsModule} from '@ngrx/effects'

@NgModule({
  declarations: [...coreContainers],
  imports: [
    NxModule.forRoot(),
    RootStoreModule,
    EffectsModule.forRoot([]),
    RouterModule.forRoot(coreRoutes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    }],
})
export class CoreModule {
}
