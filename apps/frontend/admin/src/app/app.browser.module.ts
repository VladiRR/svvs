import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {environment} from '../../../client/src/environments/environment'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {AppModule} from './app.module'

@NgModule({
  imports: [
    AppModule,
    !environment.production ? StoreDevtoolsModule.instrument({logOnly: environment.production}) : [],
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {
}
