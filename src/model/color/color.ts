export type ColorValue = number
export const AvailableColorKeys = ['RGB', 'HSL'] as const
export type AvailableColorKey = typeof AvailableColorKeys[number]

export class Color {
  type: AvailableColorKey
  constructor(type: AvailableColorKey) {
    this.type = type
  }
}

export class RGB extends Color {
  red: ColorValue
  green: ColorValue
  blue: ColorValue

  constructor(red: ColorValue, green: ColorValue, blue: ColorValue) {
    super('RGB')
    this.red = red
    this.green = green
    this.blue = blue
  }
}

export class HSL extends Color {
  hue: ColorValue
  saturation: ColorValue
  lightness: ColorValue

  constructor(hue: ColorValue, saturation: ColorValue, lightness: ColorValue) {
    super('HSL')
    this.hue = hue
    this.saturation = saturation
    this.lightness = lightness
  }
}

export type AvailableColor = RGB | HSL
