import { Cascade, Entity, OneToMany, Property } from '@mikro-orm/core'

import { CustomBaseEntity, Item } from '~/entities'

@Entity()
export class Project extends CustomBaseEntity {
  @Property()
  public sort!: number

  @Property()
  public label!: string

  @OneToMany(
    () => {
      return Item
    },
    (item) => {
      return item.project
    },
    {
      cascade: [Cascade.PERSIST],
      nullable: true,
    },
  )
  public items?: Item
}
