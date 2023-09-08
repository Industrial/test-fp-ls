import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import type { AnyRouter } from '@trpc/server'

export const serveTRPCRequest = async (router: AnyRouter, request: Request): Promise<Response> => {
  return await fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router,
    createContext: () => {
      return {}
    },
  })
}
