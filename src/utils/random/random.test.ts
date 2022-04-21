import { getRandomElement, getRandomNumber } from './random'

describe('getRandomNumber', () => {
  it.each([
    [1, 2],
    [2, 100],
  ])('should return a number between %d and %d (inclusive)', (min, max) => {
    const result = getRandomNumber(min, max)

    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThanOrEqual(max)
  })
})

describe('getRandomElement', () => {
  it.each([[[1, 2, 3]], [[1]]])('should get an element from %s', (list) => {
    const result = getRandomElement(list)

    expect(list).toContain(result)
  })
})
