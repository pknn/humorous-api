import { getRandomNumber } from '../../utils/random'

export type ColorValue = number
export enum ColorUnit {
  Literal = '',
  Percentage = '%',
}
export interface ColorComponent {
  value: ColorValue
  unit: ColorUnit
}

export const AvailableColorKeys = ['RGB', 'HSL'] as const
export type AvailableColorKey = typeof AvailableColorKeys[number]

export abstract class Color {
  type: AvailableColorKey
  components: ColorComponent[]

  constructor(type: AvailableColorKey, ...colorComponents: ColorComponent[]) {
    this.type = type
    this.components = colorComponents
  }
}

export class RGB extends Color {
  constructor(...colorValues: [ColorValue, ColorValue, ColorValue]) {
    super(
      'RGB',
      ...colorValues.map((value) => ({ unit: ColorUnit.Literal, value })),
    )
  }

  static getRandomColor() {
    return new RGB(
      getRandomNumber(0, 255),
      getRandomNumber(0, 255),
      getRandomNumber(0, 255),
    )
  }
}

export class HSL extends Color {
  constructor(...colorValues: [ColorValue, ColorValue, ColorValue]) {
    super(
      'HSL',
      { unit: ColorUnit.Literal, value: colorValues[0] },
      { unit: ColorUnit.Percentage, value: colorValues[1] },
      { unit: ColorUnit.Percentage, value: colorValues[2] },
    )
  }

  static getRandomColor() {
    return new HSL(
      getRandomNumber(0, 359),
      getRandomNumber(0, 100),
      getRandomNumber(0, 100),
    )
  }
}

export const AvailableColors = [RGB, HSL]
