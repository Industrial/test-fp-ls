import { EntityManager } from '@mikro-orm/core'
import { Seeder } from '@mikro-orm/seeder'

import { ItemFactory } from '~/factories/ItemFactory'
import { ListFactory } from '~/factories/ListFactory'
import { ProjectFactory } from '~/factories/ProjectFactory'
import { TagFactory } from '~/factories/TagFactory'

export class DatabaseSeeder extends Seeder {
  public async run(em: EntityManager): Promise<void> {
    new ItemFactory(em)
      .each((item) => {
        item.project = new ProjectFactory(em).makeOne()
        item.list = new ListFactory(em).makeOne()
        item.tags.set(new TagFactory(em).make(10))
      })
      .make(1000)
  }
}
