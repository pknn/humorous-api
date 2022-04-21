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
  getRandomColor(): RGB {
    return {
      red: 100,
      green: 100,
      blue: 100,
    }
  }
}

export class HSLBuilder extends ColorBuilder<HSL> {
  getRandomColor(): HSL {
    return {
      hue: 200,
      saturation: 100,
      lightness: 100,
    }
  }
}
