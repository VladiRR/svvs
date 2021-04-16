import {Action} from '@ngrx/store'
import {TypedAction} from '@ngrx/store/src/models'

import {md5} from '../utils/md5.util'

/**
 * Abstract effect
 */
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


  /**
   * Create id from payload
   *
   * @param payload
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getEffectIdFromPayload(payload: any): string {
    return md5(JSON.stringify(payload))
  }

  /**
   * Error handler to effects
   *
   * @param action
   * @param error
   * @param responseAction
   * @param debug
   */
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
