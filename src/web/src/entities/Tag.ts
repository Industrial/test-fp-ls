import { Collection, Entity, ManyToMany, Property } from '@mikro-orm/core'

import { CustomBaseEntity, Item } from '~/entities'

@Entity()
export class Tag extends CustomBaseEntity {
  @Property()
  public sort!: number

  @Property()
  public label!: string

  @ManyToMany(
    () => {
      return Item
    },
    (item) => {
      return item.tags
    },
  )
  public items: Collection<Item> = new Collection<Item>(this)
}
