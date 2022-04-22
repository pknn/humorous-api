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
  constructor(...colorComponents: ColorComponent[]) {
    super('RGB', ...colorComponents)
  }

  static getRandomColor() {
    return new RGB(
      {
        unit: ColorUnit.Literal,
        value: getRandomNumber(0, 255),
      },
      {
        unit: ColorUnit.Literal,
        value: getRandomNumber(0, 255),
      },
      {
        unit: ColorUnit.Literal,
        value: getRandomNumber(0, 255),
      },
    )
  }
}

export class HSL extends Color {
  constructor(...colorComponents: ColorComponent[]) {
    super('HSL', ...colorComponents)
  }

  static getRandomColor() {
    return new HSL(
      {
        unit: ColorUnit.Literal,
        value: getRandomNumber(0, 359),
      },
      {
        unit: ColorUnit.Percentage,
        value: getRandomNumber(0, 100),
      },
      {
        unit: ColorUnit.Percentage,
        value: getRandomNumber(0, 100),
      },
    )
  }
}

export const AvailableColors = [RGB, HSL]
