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
    return {
      red: this.getRandomRgbValue(),
      green: this.getRandomRgbValue(),
      blue: this.getRandomRgbValue(),
    }
  }
}

export class HSLBuilder extends ColorBuilder<HSL> {
  private getRandomPercentageValue(): ColorValue {
    return getRandomNumber(0, 100)
  }

  getRandomColor(): HSL {
    return {
      hue: getRandomNumber(0, 359),
      saturation: this.getRandomPercentageValue(),
      lightness: this.getRandomPercentageValue(),
    }
  }
}

export const AvailableColorBuilders: ColorBuilder<AvailableColor>[] = [
  new RGBBuilder(),
  new HSLBuilder(),
]
