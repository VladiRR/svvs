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

@NgModule({
  declarations: [AppComponent],
  imports: [
    NxModule.forRoot(),
    RootStoreModule,
    AuthStoreModule.forRoot(),
    UsersStoreModule.forRoot(),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([], {initialNavigation: 'enabled'}),
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
