/**
 * Abstract effect
 */
import {Action} from '@ngrx/store'
import {TypedAction} from '@ngrx/store/src/models'

export abstract class AbstractEffects<T> {

  /**
   *
   * Return "partial" state from feature_key
   *
   * @param state Root state
   * @param key Feature key
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getState<S = T>(state: any, key?: string): S {
    return state[ key || this.key]
  }


  errorHandler(
    action: Action,
    error: Record<string, unknown> = {},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    responseAction?: (payload?: any) => TypedAction<any>,
    debug = false): Action | never {

    if (debug) {
      console.error(error)
    }

    if (responseAction()) {
      return responseAction({payload: error})
    }

  }


  protected constructor(protected readonly key: string) {
  }
}
