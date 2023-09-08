import { List, Project, Tag } from '~/domain'

export type Item = {
  id: string
  sort: number
  date_created: string
  date_updated: string
  label: string
  list: List
  project: Project
  tags: Array<Tag>
}
