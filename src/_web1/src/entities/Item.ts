import { Cascade, Collection, Entity, ManyToMany, ManyToOne, Property } from '@mikro-orm/core'

import { CustomBaseEntity, List, Project, Tag } from '~/entities'

@Entity()
export class Item extends CustomBaseEntity {
  @Property()
  public sort!: number

  @Property()
  public label!: string

  @ManyToOne(
    () => {
      return List
    },
    {
      cascade: [Cascade.PERSIST],
    },
  )
  public list!: List

  @ManyToOne(
    () => {
      return Project
    },
    {
      cascade: [Cascade.PERSIST],
      nullable: true,
    },
  )
  public project?: Project

  @ManyToMany(() => {
    return Tag
  })
  public tags = new Collection<Tag>(this)
}
