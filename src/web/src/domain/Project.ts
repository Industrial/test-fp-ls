import { Item } from '~/domain'

export type Project = {
  id: string
  sort: number
  date_created: string
  date_updated: string
  label: string
  items: Array<Item>
}
