import { HSL, RGB } from './color'

describe('RGB', () => {
  it('should return RGB color with valid color range', () => {
    const color = new RGB()

    expect(color).toHaveProperty('type')
    expect(color.type).toBe('RGB')

    expect(color).toHaveProperty('red')
    expect(color.red).toBeGreaterThanOrEqual(0)
    expect(color.red).toBeLessThanOrEqual(255)

    expect(color).toHaveProperty('green')
    expect(color.green).toBeGreaterThanOrEqual(0)
    expect(color.green).toBeLessThanOrEqual(255)

    expect(color).toHaveProperty('blue')
    expect(color.blue).toBeGreaterThanOrEqual(0)
    expect(color.blue).toBeLessThanOrEqual(255)
  })
})

describe('HSL', () => {
  it('should return HSL color with valid color range', () => {
    const color = new HSL()

    expect(color).toHaveProperty('type')
    expect(color.type).toBe('HSL')

    expect(color).toHaveProperty('hue')
    expect(color.hue).toBeGreaterThanOrEqual(0)
    expect(color.hue).toBeLessThanOrEqual(359)

    expect(color).toHaveProperty('saturation')
    expect(color.saturation).toBeGreaterThanOrEqual(0)
    expect(color.saturation).toBeLessThanOrEqual(100)

    expect(color).toHaveProperty('lightness')
    expect(color.lightness).toBeGreaterThanOrEqual(0)
    expect(color.lightness).toBeLessThanOrEqual(100)
  })
})
