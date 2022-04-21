import { HSL, RGB } from './color'

describe('RGB', () => {
  const rgbProperties: (keyof RGB)[] = ['red', 'green', 'blue']
  it('should return RGB color with valid color range', () => {
    const color = new RGB()

    expect(color).toHaveProperty('type')
    expect(color.type).toBe('RGB')

    rgbProperties.forEach((property: keyof RGB) => {
      expect(color).toHaveProperty(property)
      expect(color[property]).toBeGreaterThanOrEqual(0)
      expect(color[property]).toBeLessThanOrEqual(255)
    })
  })
})

describe('HSL', () => {
  const hslPropertiesRange: [keyof HSL, [number, number]][] = [
    ['hue', [0, 359]],
    ['saturation', [0, 100]],
    ['lightness', [0, 100]],
  ]

  it('should return HSL color with valid color range', () => {
    const color = new HSL()

    expect(color).toHaveProperty('type')
    expect(color.type).toBe('HSL')

    hslPropertiesRange.forEach((propertyRange) => {
      expect(color).toHaveProperty(propertyRange[0])
      expect(color[propertyRange[0]]).toBeGreaterThanOrEqual(
        propertyRange[1][0],
      )
      expect(color[propertyRange[0]]).toBeLessThanOrEqual(propertyRange[1][1])
    })
  })
})
