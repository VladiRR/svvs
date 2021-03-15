import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RootStoreModule } from '@svvs/frontend/shared/data-access/root-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'svvs-client' }),
    RootStoreModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
})
export class AppModule {}
