import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import { extname } from '$std/path/posix.ts'
import { pipe } from 'fp-ts/function'
import { typeByExtension } from '$std/media_types/mod.ts'

const fetchURL = TE.tryCatchK(async (url: URL) => {
  const response = await fetch(url)
  return response
}, E.toError)

const pathname = (urlString: string): string => {
  const requestURL = new URL(urlString)
  return requestURL.pathname === '/' ? '/index.html' : requestURL.pathname
}

export const serveStaticFile = async (request: Request): Promise<Response> => {
  const filePath = `../dist${pathname(request.url)}`
  const fileURL = new URL(filePath, import.meta.url)
  const contentType = typeByExtension(extname(filePath)) ?? 'text/plain'

  return await pipe(
    fetchURL(fileURL),
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
