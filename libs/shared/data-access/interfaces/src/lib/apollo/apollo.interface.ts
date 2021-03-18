import {DocumentNode} from 'graphql'
import {Observable} from 'rxjs'
import {ApolloError} from '@apollo/client'

/**
 * Apollo request
 */
export interface IApolloRequest {
  /**
   * Request entity keys
   */
  keys?: string
  /**
   * Apollo request query
   */
  query: DocumentNode
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TApolloResponse<T = any, R extends ApolloError = ApolloError> = Observable<T | R>
