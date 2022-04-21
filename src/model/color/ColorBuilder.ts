import { getRandomNumber } from '../../utils/random'
import { AvailableColor, Color, ColorValue, HSL, RGB } from './color'

export abstract class ColorBuilder<T extends Color> {
  abstract getRandomColor(): T
}

export class RGBBuilder extends ColorBuilder<RGB> {
  private getRandomRgbValue(): ColorValue {
    return getRandomNumber(0, 255)
  }

  getRandomColor(): RGB {
    return new RGB(
      this.getRandomRgbValue(),
      this.getRandomRgbValue(),
      this.getRandomRgbValue(),
    )
  }
}

export class HSLBuilder extends ColorBuilder<HSL> {
  private getRandomPercentageValue(): ColorValue {
    return getRandomNumber(0, 100)
  }

  getRandomColor(): HSL {
    return new HSL(
      getRandomNumber(0, 359),
      this.getRandomPercentageValue(),
      this.getRandomPercentageValue(),
    )
  }
}

export const AvailableColorBuilders: ColorBuilder<AvailableColor>[] = [
  new RGBBuilder(),
  new HSLBuilder(),
]
