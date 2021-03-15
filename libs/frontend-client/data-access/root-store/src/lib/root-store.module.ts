import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store'
import {RouterModule} from '@angular/router'
import {StoreRouterConnectingModule} from '@ngrx/router-store'
import {reducers} from './+state/root-reducer'
import {rootInitialState} from './+state/root-initial-state'

@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot(reducers, {
      initialState: rootInitialState
    }),
    StoreRouterConnectingModule
  ],
})
export class RootStoreModule {}
