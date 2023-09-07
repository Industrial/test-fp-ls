import type { TaskEither} from 'fp-ts/TaskEither'
import { fromAsyncIterable } from '#/lib/array.ts'
import { fromNullable } from 'fp-ts/Option'
import { tryCatch, match } from 'fp-ts/TaskEither'

const wrapError = (e: unknown) => {
  if (e instanceof Error) {
    return e
  }
  return new Error(String(e))
}

const readDir = (path: string): TaskEither<Error, Array<Deno.DirEntry>> =>
  tryCatch(() => fromAsyncIterable(Deno.readDir(path)), wrapError)

export function add(x: number, y: number): number {
  fromNullable(x + y)
  return x + y
}

match()(readDir('.'))
