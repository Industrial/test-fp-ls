export const fromAsyncIterable = async <T>(asyncIterable: AsyncIterable<T>): Promise<Array<T>> => {
  const result: Array<T> = []
  for await (const item of asyncIterable) {
    result.push(item)
  }
  return result
}
