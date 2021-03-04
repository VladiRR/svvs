import GraphQLJSON from 'graphql-type-json'
import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export const resolverMap = {
  Data: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      return value.getTime() // Value from the client
    },
    parseValue(value) {
      return new Date(value) // Value send to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)) // ast value is always in string format
      }
      return null // Invalid hard-coded value (not an integer)
    },
  }),
  JSON: GraphQLJSON,
}



