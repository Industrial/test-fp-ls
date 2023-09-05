import * as O from 'fp-ts/Option'
import * as TE from 'fp-ts/TaskEither'

const collectAsyncIterable = async <T>(i: AsyncIterable<T>): Promise<Array<T>> => {
  const result: Array<T> = []
  for await (const item of i) {
    result.push(item)
  }
  return result
}

const wrapError = (e: unknown) => {
  if (e instanceof Error) {
    return e
  }
  return new Error(String(e))
}

const readDir = (path: string): TE.TaskEither<Error, Array<Deno.DirEntry>> =>
  TE.tryCatch(async () => collectAsyncIterable(Deno.readDir(path)),
    wrapError)

export function add(x: number, y: number) {
  O.fromNullable(x + y)
  return x + y
}

const main = () => {
  TE.match()(readDir('.'))
}
