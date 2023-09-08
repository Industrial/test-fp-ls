import { appRouter } from '#/src/api/router.ts'
import { serveStaticFile } from '#/src/lib/server/static.ts'
import { serveTRPCRequest } from '#/src/lib/server/trpc.ts'

Deno.serve(async (request: Request) => {
  const requestURL = new URL(request.url)
  if (requestURL.pathname.startsWith('/api/trpc')) {
    return await serveTRPCRequest(appRouter, request)
  }
  return await serveStaticFile(request)
}, {
  port: 4000,
})
