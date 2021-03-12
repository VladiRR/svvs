import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'svvs-client' }),
    RouterModule.forRoot([], {initialNavigation: 'enabled'})
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
