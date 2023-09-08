import { exampleRouter } from '~/server/api/routers/example'
import { createTRPCRouter } from '~/server/api/utils'

export const appRouter = createTRPCRouter({
  example: exampleRouter,
})

export type AppRouter = typeof appRouter