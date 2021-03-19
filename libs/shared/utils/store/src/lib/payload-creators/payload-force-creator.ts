import {ActionCreatorProps, props} from '@ngrx/store'
import {IActionForcePayload} from '@svvs/shared/data-access/interfaces'

/**
 * Payload is payload-creator function with force
 *
 *
 * @description
 *
 * Create payload force => action
 *
 *
 */
export function payloadForce<P extends Record<string, unknown>>(): ActionCreatorProps<{ payload: P & IActionForcePayload }> {
  return props<{ payload: P & IActionForcePayload }>()
}
