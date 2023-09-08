import { appRouter } from '#/src/api/router.ts'
import { extname } from '$std/path/posix.ts'
import { typeByExtension } from '$std/media_types/mod.ts'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

const serveStaticFile = async (request: Request) => {
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

const serveTRPCRequest = async (request: Request) => {
  return await fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext: () => {
      return {}
    },
  })
}

const handler = async (request: Request) => {
  const requestURL = new URL(request.url)
  if (requestURL.pathname.startsWith('/api/trpc')) {
    return await serveTRPCRequest(request)
  }

  return await serveStaticFile(request)
}

Deno.serve(handler, {
  port: 4000,
})
