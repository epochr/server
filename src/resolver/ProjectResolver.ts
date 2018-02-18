import { Query, Resolver, ResolveProperty, Mutation } from '@nestjs/graphql';
import { find, filter } from 'lodash';

@Resolver('Project')
export class ProjectResolver {

  constructor() {
  }

  @Query()
  projects(obj, args, context, info) {
    return [{ name: "Test" }]
  }

}