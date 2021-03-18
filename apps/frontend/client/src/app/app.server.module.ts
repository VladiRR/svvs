import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './core/components/app/app.component';
import {CoreModule} from './core/core.module'

@NgModule({
  imports: [
    AppModule,
    CoreModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
