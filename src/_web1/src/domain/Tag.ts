import { Item } from '~/domain'

export type Tag = {
  id: string
  sort: number
  date_created: string
  date_updated: string
  label: string
  items: Array<Item>
}
