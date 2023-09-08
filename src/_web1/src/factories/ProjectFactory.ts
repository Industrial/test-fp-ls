import { Factory, Faker } from '@mikro-orm/seeder'

import { Project } from '~/entities'

export class ProjectFactory extends Factory<Project> {
  public model = Project

  public definition(faker: Faker): Partial<Project> {
    return {
      label: faker.word.adjective(),
      sort: 0,
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
    }
  }
}
