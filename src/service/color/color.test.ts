import { AvailableColorKeys } from '../../model'
import { getRandom5Colors } from './color'

describe('getRandom5Color', () => {
  it('should get random 5 colors with random AvailableColor', () => {
    const result = getRandom5Colors()

    expect(result).toHaveLength(5)
    expect(result.every((color) => AvailableColorKeys.includes(color.type)))
  })
})
