import { Factory, Faker } from '@mikro-orm/seeder'

import { List } from '~/entities'

export class ListFactory extends Factory<List> {
  public model = List

  public definition(faker: Faker): Partial<List> {
    return {
      label: faker.word.adjective(),
      sort: 0,
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
    }
  }
}
