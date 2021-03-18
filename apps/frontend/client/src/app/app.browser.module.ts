import {NgModule} from '@angular/core'
import {AppModule} from './app.module'
import {environment} from '../environments/environment'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {AppComponent} from './core/components/app/app.component'
import {CoreModule} from './core/core.module'

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({logOnly: environment.production}) : [],
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {
}
