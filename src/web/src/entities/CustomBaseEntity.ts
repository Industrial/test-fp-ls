import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class CustomBaseEntity {
  @PrimaryKey()
  public id!: number

  @Property()
  public createdAt!: Date

  @Property()
  public updatedAt!: Date
}
