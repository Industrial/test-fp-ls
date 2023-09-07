import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core'

import { CustomBaseEntity, Item } from '~/entities'

@Entity()
export class List extends CustomBaseEntity {
  @Property()
  public sort!: number

  @Property()
  public label!: string

  @OneToMany(
    () => {
      return Item
    },
    (item) => {
      return item.list
    },
    {
      orphanRemoval: true,
      nullable: true,
    },
  )
  public items: Collection<Item> = new Collection<Item>(this)
}
