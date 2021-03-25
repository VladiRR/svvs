import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {fetch} from '@nrwl/angular'
import * as AuthActions from './auth.actions'

@Injectable()
export class AuthEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.init),
      fetch({
        run: () => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return AuthActions.loadAuthSuccess({auth: []})
        },

        onError: (action, error) => {
          console.error('Error', error)
          return AuthActions.loadAuthFailure({error})
        },
      }),
    ),
  )

  constructor(private actions$: Actions) {
  }
}
