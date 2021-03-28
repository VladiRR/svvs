import {Apollo} from 'apollo-angular'

import {IUserApollo} from '../interfaces/user-apollo.interface'
import {extractApolloResponse, IUser, TApolloResponse} from '@svvs/shared/utils/interfaces'
import * as UserQieries from '../graphql/user.queries'
import {catchError, map} from 'rxjs/operators'
import {ApolloError} from '@apollo/client'
import {throwError} from 'rxjs'
import {Injectable} from '@angular/core'

@Injectable()
export class UserApollo implements IUserApollo {
  constructor( private apollo: Apollo) {
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loadUser(queryParams: Record<string, unknown> = {}): TApolloResponse<IUser> {
    return this.apollo
      .query<{ user: IUser}>( {query: UserQieries.userRequest.query} )
      .pipe(
        map(result => extractApolloResponse(result, UserQieries.userRequest.keys)),
        catchError((error: ApolloError) => throwError(error))
      )
  }



}
