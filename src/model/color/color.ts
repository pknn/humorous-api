export type ColorValue = number
export interface Color {}
export interface RGB extends Color {
  red: ColorValue
  green: ColorValue
  blue: ColorValue
}

export interface HSL extends Color {
  hue: ColorValue
  saturation: ColorValue
  lightness: ColorValue
}

export type AvailableColor = RGB | HSL
