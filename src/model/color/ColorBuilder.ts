interface Color {}
interface RGB extends Color {}
interface HSL extends Color {}

export abstract class ColorBuilder<T extends Color> {
  abstract getRandomColor(): T
}

export class RGBBuilder extends ColorBuilder<RGB> {
  getRandomColor(): RGB {
    return {}
  }
}

export class HSLBuilder extends ColorBuilder<HSL> {
  getRandomColor(): HSL {
    return {}
  }
}
