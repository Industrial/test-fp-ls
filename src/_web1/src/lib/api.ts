import { Directus } from '@directus/sdk'

import { Item, List, Project, Tag } from '~/domain'

export type Collections = {
  Item: Item
  Project: Project
  List: List
  Tag: Tag
}

export const getAPI = (): Directus<Collections> => {
  const NODE_ENV = String(process.env.NODE_ENV)
  const API_HOST = String(process.env.API_HOST)
  const API_PORT = String(process.env.API_PORT)

  const protocol = NODE_ENV === 'production' ? 'https' : 'http'

  const instance = new Directus<Collections>(`${protocol}://${API_HOST}:${API_PORT}`)

  return instance
}

export const countCollection = async (api: Directus<Collections>, name: string): Promise<number> => {
  const result = await api.items(name).readByQuery({
    meta: 'total_count',
  })

  if (!result.meta?.total_count) {
    throw new Error(`Count for ${name} not found`)
  }

  return result.meta.total_count
}
