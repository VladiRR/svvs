import {IUsersState} from './users-state.interface'
import {USERS_FEATURE_KEY} from '../+state/users.reducer'


export interface IUsersStoreFeatureKey {
  readonly [USERS_FEATURE_KEY]: IUsersState
}
