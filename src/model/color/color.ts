import { getRandomNumber } from '../../utils/random'

export type ColorValue = number
export const AvailableColorKeys = ['RGB', 'HSL'] as const
export type AvailableColorKey = typeof AvailableColorKeys[number]

export class Color {
  type: AvailableColorKey
  components: ColorValue[]
  constructor(type: AvailableColorKey, ...components: ColorValue[]) {
    this.type = type
    this.components = components
  }
}

export class RGB extends Color {
  constructor() {
    super(
      'RGB',
      getRandomNumber(0, 255),
      getRandomNumber(0, 255),
      getRandomNumber(0, 255),
    )
  }
}

export class HSL extends Color {
  constructor() {
    super(
      'HSL',
      getRandomNumber(0, 359),
      getRandomNumber(0, 100),
      getRandomNumber(0, 100),
    )
  }
}

export type AvailableColor = RGB | HSL
export type AC = typeof RGB | typeof HSL
export const AvailableColors: AC[] = [RGB, HSL]
