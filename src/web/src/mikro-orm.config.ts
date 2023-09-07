import { TSMigrationGenerator } from '@mikro-orm/migrations'
import { TsMorphMetadataProvider } from '@mikro-orm/reflection'
import type { Options } from '@mikro-orm/sqlite'

const config: Options = {
  type: 'sqlite',
  dbName: 'todo-development.sqlite',
  baseDir: process.cwd(),
  entities: [`./src/entities/*`, './src/entities/CustomBaseEntity.ts'],
  entitiesTs: [`./src/entities/*`],
  tsNode: true,
  metadataProvider: TsMorphMetadataProvider,
  migrations: {
    tableName: 'migrations',
    path: './src/migrations',
    pathTs: './src/migrations',
    glob: '!(*.d).{js,ts}',
    emit: 'ts',
    snapshot: false,
    generator: TSMigrationGenerator,
  },
}

export default config
