import { getRandomNumber } from '../../utils/random'

type ColorValue = number
interface Color {}
interface RGB extends Color {
  red: ColorValue
  green: ColorValue
  blue: ColorValue
}

interface HSL extends Color {
  hue: ColorValue
  saturation: ColorValue
  lightness: ColorValue
}

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
