import { Color, HSL, RGB } from '../../model'
import { getRandom5Colors } from './color'

const isRGBColor = (color: Color): color is RGB =>
  (color as RGB).red !== undefined

const isHSLColor = (color: Color): color is HSL =>
  (color as HSL).hue !== undefined

describe('getRandom5Color', () => {
  it('should get random 5 colors with random AvailableColor', () => {
    const result = getRandom5Colors()

    expect(result).toHaveLength(5)
    expect(result.every((color) => isRGBColor(color) || isHSLColor(color)))
  })
})
