import { Query, Resolver, ResolveProperty, Mutation } from '@nestjs/graphql';
import { find, filter } from 'lodash';

@Resolver('Food')
export class ProjectResolver {

  constructor() {
  }

  @Query()
  projects(obj, args, context, info) {
    return [{ name: "Test" }]
  }

}