import {USER_FEATURE_KEY} from '@svvs/frontend/shared/data-access/user-store'
import {IUserState} from './user-state.interface'


export interface IUserStoreFeatureKey {
  readonly [USER_FEATURE_KEY]: IUserState
}
