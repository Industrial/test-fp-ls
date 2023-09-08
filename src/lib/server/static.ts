import { extname } from '$std/path/posix.ts'
import { typeByExtension } from '$std/media_types/mod.ts'

export const serveStaticFile = async (request: Request): Promise<Response> => {
  const requestURL = new URL(request.url)
  let pathname = requestURL.pathname
  if (pathname === '/') {
    pathname = '/index.html'
  }

  const filePath = `../dist${pathname}`
  const fileURL = new URL(filePath, import.meta.url)
  const fileResponse = await fetch(fileURL)
  const contentType = typeByExtension(extname(filePath)) ?? 'text/plain'

  const response = new Response(fileResponse.body, {
    status: fileResponse.status,
    statusText: fileResponse.statusText,
    headers: {
      'Content-Type': contentType,
    },
  })

  return response
}
