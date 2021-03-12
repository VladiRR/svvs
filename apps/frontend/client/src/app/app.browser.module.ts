import {NgModule} from '@angular/core'
import {AppModule} from './app.module'
import {environment} from '../environments/environment'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {AppComponent} from './app.component'

@NgModule({
  imports: [
    AppModule,
    !environment.production ? StoreDevtoolsModule.instrument({logOnly: environment.production}) : [],
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
}
