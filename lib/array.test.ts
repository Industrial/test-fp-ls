import { fromAsyncIterable } from '#/lib/array.ts'
import { assertEquals } from '$std/testing/asserts.ts'

Deno.test('fromAsyncIterable', async () => {
  // Assemble
  const numbers = [1, 2, 3]
  const asyncIterator = {
    async *[Symbol.asyncIterator](): AsyncGenerator<number> {
      for (const number of numbers) {
        yield number
      }
    },
  }

  // Act
  const expected = [1, 2, 3]
  const actual = await fromAsyncIterable(asyncIterator)

  // Assert
  assertEquals(actual, expected)
})
