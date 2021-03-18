import {HttpLink} from 'apollo-angular/http'
import {InMemoryCache} from '@apollo/client/core'
import {environment} from '../../../environments/environment'


export function createApollo(httpLink: HttpLink) {
  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: environment.graphql.uri,
    }),
  }
}
