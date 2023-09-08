import { MikroORM } from '@mikro-orm/sqlite'

import config from '~/mikro-orm.config'

export const db = await MikroORM.init(config)
