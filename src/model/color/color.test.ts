import { ColorUnit, HSL, RGB } from './color'

describe('RGB', () => {
  it('should return RGB color with valid color range', () => {
    const color = RGB.getRandomColor()

    expect(color).toHaveProperty('type')
    expect(color.type).toBe('RGB')

    color.components.forEach(({ unit, value }) => {
      expect(unit).toBe(ColorUnit.Literal)
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThanOrEqual(255)
    })
  })
})

describe('HSL', () => {
  const hslUnits: ColorUnit[] = [
    ColorUnit.Literal,
    ColorUnit.Percentage,
    ColorUnit.Percentage,
  ]
  const hslRanges: [number, number][] = [
    [0, 359],
    [0, 100],
    [0, 100],
  ]

  it('should return HSL color with valid color range', () => {
    const color = new HSL()

    expect(color).toHaveProperty('type')
    expect(color.type).toBe('HSL')

    color.components.forEach(({ unit, value }, index) => {
      expect(unit).toBe(hslUnits[index])
      expect(value).toBeGreaterThanOrEqual(hslRanges[index]![0])
      expect(value).toBeLessThanOrEqual(hslRanges[index]![1])
    })
  })
})
