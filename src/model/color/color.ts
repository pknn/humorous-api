import { getRandomNumber } from '../../utils/random'

export type ColorValue = number
export enum ColorUnit {
  Literal = '',
  Percentage = '%',
}
export const AvailableColorKeys = ['RGB', 'HSL'] as const
export type AvailableColorKey = typeof AvailableColorKeys[number]

export class Color {
  type: AvailableColorKey
  units: ColorUnit[]
  components: ColorValue[]

  constructor(
    type: AvailableColorKey,
    units: ColorUnit[],
    ...components: ColorValue[]
  ) {
    this.type = type
    this.units = units
    this.components = components
  }
}

export class RGB extends Color {
  constructor() {
    super(
      'RGB',
      [ColorUnit.Literal, ColorUnit.Literal, ColorUnit.Literal],
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
      [ColorUnit.Literal, ColorUnit.Percentage, ColorUnit.Percentage],
      getRandomNumber(0, 359),
      getRandomNumber(0, 100),
      getRandomNumber(0, 100),
    )
  }
}

export type AvailableColor = typeof RGB | typeof HSL
export const AvailableColors: AvailableColor[] = [RGB, HSL]
