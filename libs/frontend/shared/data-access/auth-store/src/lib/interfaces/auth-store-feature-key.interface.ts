import {AUTH_FEATURE_KEY} from '../+state/auth.reducer'
import {IAuthState} from './auth-state.interface'


export interface IAuthStoreFeatureKey {
  readonly [AUTH_FEATURE_KEY]: IAuthState;
}
