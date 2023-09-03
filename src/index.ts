import * as TE from 'fp-ts/TaskEither'

import { resolve } from '$std/path/posix.ts'

const readDir = (path: string): TE.TaskEither<Error, Array<string>> =>
  TE.tryCatch(() => Deno.readDir(path),
    (e) => new Error(e.message))

const main = async () => {
  // eslint-disable-next-line no-undef
  const [directoryPath] = Deno.args
  const resolvedPath = resolve(directoryPath)

  const nodes = await Deno.readDir(resolvedPath)

  for await (const node of nodes) {
    console.log(node)
  }
}

main().catch(console.error)
