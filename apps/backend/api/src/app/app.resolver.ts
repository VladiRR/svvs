import { Query, Resolver } from '@nestjs/graphql'

@Resolver('app')
export class AppResolver {

  @Query('test')
  async getData() {
    return `It's Graphql response`
  }
}
