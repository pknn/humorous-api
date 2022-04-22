import { HSL, RGB } from './color'

describe('RGB', () => {
  it('should return RGB color with valid color range', () => {
    const color = new RGB()

    expect(color).toHaveProperty('type')
    expect(color.type).toBe('RGB')

    color.components.forEach((component) => {
      expect(component).toBeGreaterThanOrEqual(0)
      expect(component).toBeLessThanOrEqual(255)
    })
  })
})

describe('HSL', () => {
  const hslRange: [number, number][] = [
    [0, 359],
    [0, 100],
    [0, 100],
  ]

  it('should return HSL color with valid color range', () => {
    const color = new HSL()

    expect(color).toHaveProperty('type')
    expect(color.type).toBe('HSL')

    color.components.forEach((component, index) => {
      expect(component).toBeGreaterThanOrEqual(hslRange[index]![0])
      expect(component).toBeLessThanOrEqual(hslRange[index]![1])
    })
  })
})
