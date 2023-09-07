import { Factory, Faker } from '@mikro-orm/seeder'

import { Tag } from '~/entities'

export class TagFactory extends Factory<Tag> {
  public model = Tag

  public definition(faker: Faker): Partial<Tag> {
    return {
      label: faker.word.adjective(),
      sort: 0,
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
    }
  }
}
