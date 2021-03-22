import {ActionCreatorProps, props} from '@ngrx/store'

/**
 * payload is payload-creator function
 *
 *
 * @description
 *
 * Create payload => action
 */
export function payload<P>(): ActionCreatorProps<{ payload: P }> {
  return props<{ payload: P }>()
}

