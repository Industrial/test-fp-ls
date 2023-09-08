import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import { extname, resolve } from '$std/path/posix.ts'
import { pipe } from 'fp-ts/function'
import { typeByExtension } from '$std/media_types/mod.ts'

export const serveStaticFile = async (request: Request): Promise<Response> => {
  const requestURL = new URL(request.url)
  const pathname = requestURL.pathname === '/' ? '/index.html' : requestURL.pathname
  const filePath = resolve(`dist${pathname}`)
  const fileURL = new URL(filePath, import.meta.url)
  const contentType = typeByExtension(extname(filePath)) ?? 'text/plain'

  return await pipe(
    TE.tryCatchK(fetch, E.toError)(fileURL),
    TE.match(
      () => {
        return new Response('Internal Server Error', {
          status: 500,
        })
      },
      (fileResponse) => {
        return new Response(fileResponse.body, {
          status: fileResponse.status,
          statusText: fileResponse.statusText,
          headers: {
            'Content-Type': contentType,
          },
        })
      },
    ),
  )()
}
