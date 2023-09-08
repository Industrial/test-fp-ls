import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import { appRouter } from '#/src/api/router.ts'
import { identity, pipe } from 'fp-ts/function'
import { isAPIRequest } from '#/src/lib/server/request.ts'
import { serveStaticFile } from '#/src/lib/server/static.ts'
import { serveTRPCRequest } from '#/src/lib/server/trpc.ts'

Deno.serve(async (request: Request) => {
  const handler = isAPIRequest(request)
    ? (r: Request) => {
      return serveTRPCRequest(appRouter, r)
    }
    : serveStaticFile

  return await pipe(
    TE.tryCatchK(handler, E.toError)(request),
    TE.match(
      () => {
        return new Response(undefined, {
          status: 500,
        })
      },
      identity,
    ),
  )()
}, {
  port: 4000,
})
