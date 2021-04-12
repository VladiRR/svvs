import {IAuthState} from '../interfaces/auth-state.interface'


export const authInitialState: IAuthState = {
  signIn: null,
  signInError: null,
  signInRun: false,
  signOutError: null,
  signOutRun: false
}
