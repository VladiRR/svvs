import {Action} from '@ngrx/store'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IActionEffectPayload<T = any> extends Action {
  payload: T
}
