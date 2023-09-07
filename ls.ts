import * as A from 'fp-ts/Array'
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import { fromAsyncIterable } from '#/lib/array.ts'
import { join } from '$std/path/mod.ts'
import { pipe } from 'fp-ts/function'

const readDir = (path: string) => {
  return TE.tryCatch(async () => {
    const result = await fromAsyncIterable(Deno.readDir(path))
    return result
  }, E.toError)
}

const stat = (path: string) => {
  return TE.tryCatch(async () => {
    const result = await Deno.stat(path)
    return result
  }, E.toError)
}

const directoryPath = '.'

const main = pipe(
  readDir(directoryPath),
  TE.chain((dirEntries) => {
    return pipe(
      dirEntries,
      A.map((dirEntry) => {
        const dirEntryPath = join(directoryPath, dirEntry.name)
        return stat(dirEntryPath)
      }),
      TE.sequenceArray,
    )
  }),
  TE.match(
    console.error,
    (a) => {
      console.log('right', a)
    },
  ),
)

await main()
