import { QueryClient } from '@tanstack/solid-query'
import { httpBatchLink } from '@trpc/client'
import { createTRPCSolidStart } from 'solid-trpc'

import { AppRouter } from '~/server/api/root'
import { getBaseURL } from '~/utils/environment'

export const api = createTRPCSolidStart<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseURL().toString()}api/trpc`,
        }),
      ],
    }
  },
})

export const queryClient = new QueryClient()
