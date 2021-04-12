import {Observable} from 'rxjs'
import {ISignAuthPayload} from '@svvs/shared/utils/interfaces'
import {ApolloError} from '@apollo/client'

/**
 * User facade interface
 */
export abstract class IAuthFacade {
  /**
   * SignIn observer
   */
  signIn$: Observable<ISignAuthPayload>

  /**
   * SignInRun status observer
   */
  signInRun$: Observable<boolean>

  /**
   * SignInError observer
   */
  signInError$: Observable<ApolloError>

  /**
   * SignOut status observer
   */
  signOutRun$: Observable<boolean>

  /**
   * SignOut error observer
   */
  signOutError$: Observable<ApolloError>

  /**
   * Sign in
   * @param force
   */
  abstract signIn(force?: boolean): void

  /**
   * Set sign in payload
   * @param payload
   */
  abstract signInSet(payload: ISignAuthPayload): void

  /**
   * Clear sign in payload
   */
  abstract signInClear(): void

  /**
   * Sign out
   * @param force
   */
  abstract signOut(force?: boolean): void
}
