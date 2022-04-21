import { getRandomNumber } from '../../utils/random'

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

  private getRandomRgbValue(): ColorValue {
    return getRandomNumber(0, 255)
  }

  constructor() {
    super('RGB')
    this.red = this.getRandomRgbValue()
    this.green = this.getRandomRgbValue()
    this.blue = this.getRandomRgbValue()
  }
}

export class HSL extends Color {
  hue: ColorValue
  saturation: ColorValue
  lightness: ColorValue

  private getRandomPercentageValue(): ColorValue {
    return getRandomNumber(0, 100)
  }

  constructor() {
    super('HSL')
    this.hue = getRandomNumber(0, 359)
    this.saturation = this.getRandomPercentageValue()
    this.lightness = this.getRandomPercentageValue()
  }
}

export type AvailableColor = RGB | HSL
export type AC = typeof RGB | typeof HSL
export const AvailableColors: AC[] = [RGB, HSL]
