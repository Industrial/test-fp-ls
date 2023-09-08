import { Factory, Faker } from '@mikro-orm/seeder'

import { Item } from '~/entities'

export class ItemFactory extends Factory<Item> {
  public model = Item

  public definition(faker: Faker): Partial<Item> {
    return {
      label: faker.word.adjective(),
      sort: 0,
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
    }
  }
}
