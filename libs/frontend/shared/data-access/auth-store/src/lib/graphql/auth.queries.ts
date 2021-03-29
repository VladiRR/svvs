import {IApolloRequest} from '@svvs/shared/utils/interfaces'
import {gql} from 'apollo-angular'


export const loginRequest: IApolloRequest = {
  keys: ['login'],
  query: gql`
    query($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        id
        expiresIn
        accessToken
      }
    }
  `
}


export const logoutRequest: IApolloRequest = {
  keys: ['logout'],
  query: gql`
    query {
      logout
    }
  `
}
