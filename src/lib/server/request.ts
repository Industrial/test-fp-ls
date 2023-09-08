export const isAPIRequest = (request: Request): boolean => {
  return new URL(request.url).pathname.startsWith('/api/trpc')
}
