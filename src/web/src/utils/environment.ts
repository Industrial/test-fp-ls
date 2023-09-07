export const isBrowser = (): boolean => {
  return typeof window !== 'undefined'
}

export const isNodejs = (): boolean => {
  return typeof process !== 'undefined' && typeof process.env !== 'undefined'
}

export const isDeno = (): boolean => {
  // @ts-expect-error Deno
  return typeof Deno !== 'undefined'
}

export const getEnvironmentVariable = (key: string): string | undefined => {
  if (isBrowser()) {
    throw new Error('Browser does not support environment variables')
  }

  if (isNodejs()) {
    return process.env[key] as string
  }

  if (isDeno()) {
    // @ts-expect-error Deno API
    // eslint-disable-next-line no-undef
    return Deno.env.get(key) as string
  }

  return undefined
}

export const isProduction = (): boolean => {
  return getEnvironmentVariable('NODE_ENV') === 'production'
}

export const isDevelopment = (): boolean => {
  return !isProduction()
}

export const getBaseURL = (): URL => {
  // console.log('getBaseURL')

  const host = getEnvironmentVariable('HOST') ?? 'localhost'
  // console.log('getBaseURL:host', host)

  const port = getEnvironmentVariable('PORT') ?? 3000
  // console.log('getBaseURL:port', port)

  const href = `http://${host}:${port}`
  // console.log('getBaseURL:href', href)

  const url = new URL(href)
  // console.log('getBaseURL:url', url)

  return url
}
