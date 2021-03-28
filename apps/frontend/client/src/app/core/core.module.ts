import {NgModule} from '@angular/core'
import {APOLLO_OPTIONS} from 'apollo-angular'
import {HttpLink} from 'apollo-angular/http'
import {createApollo} from './utils/create-apollo'
import {NxModule} from '@nrwl/angular'
import {RouterModule} from '@angular/router'
import {RootStoreModule} from '@svvs/frontend/shared/data-access/root-store'
import {AppComponent} from './components/app/app.component'
import {AuthStoreModule} from '@svvs/frontend/shared/data-access/auth-store'
import {EffectsModule} from '@ngrx/effects'
import {UsersStoreModule} from '@svvs/frontend/shared/data-access/user-store'



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
