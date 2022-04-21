import { HSLBuilder, RGBBuilder } from './ColorBuilder'

describe('RGBBuilder', () => {
  it('should return RGB color with correct value range', () => {
    const builder = new RGBBuilder()
    const result = builder.getRandomColor()

    expect(result).toHaveProperty('type')
    expect(result.type).toBe('RGB')

    expect(result).toHaveProperty('red')
    expect(result.red).toBeGreaterThanOrEqual(0)
    expect(result.red).toBeLessThanOrEqual(255)

    expect(result).toHaveProperty('green')
    expect(result.green).toBeGreaterThanOrEqual(0)
    expect(result.green).toBeLessThanOrEqual(255)

    expect(result).toHaveProperty('blue')
    expect(result.blue).toBeGreaterThanOrEqual(0)
    expect(result.blue).toBeLessThanOrEqual(255)
  })
})

describe('HSLBuilder', () => {
  it('should return HSL color with correct value range', () => {
    const builder = new HSLBuilder()
    const result = builder.getRandomColor()

    expect(result).toHaveProperty('type')
    expect(result.type).toBe('HSL')

    expect(result).toHaveProperty('hue')
    expect(result.hue).toBeGreaterThanOrEqual(0)
    expect(result.hue).toBeLessThanOrEqual(359)

    expect(result).toHaveProperty('saturation')
    expect(result.saturation).toBeGreaterThanOrEqual(0)
    expect(result.saturation).toBeLessThanOrEqual(100)

    expect(result).toHaveProperty('lightness')
    expect(result.lightness).toBeGreaterThanOrEqual(0)
    expect(result.lightness).toBeLessThanOrEqual(100)
  })
})
