# Humorous API

## Endpoints
- `/healthcheck`: always return 200
- `/colors`: return 5 random colors from random available color spaces

## Responses
- Color
```ts
{
  "type": "RGB" | "HSL",
  "components": string[] // "{value}{unit}" -> "30" or "50%"
}
```

## Extending Color space
You'll only need to touch `model/color/color.ts` (and test) to extend color space

1. Add new color space type to `AvailableColorKeys`, this will then add literal type to `AvailableColorKey` type
```ts
export const AvailableColorKeys = ['RGB', 'HSL', 'BRGB'] as const
export type AvailableColorKey = typeof AvailableColorKeys[number] 
                                // Now 'RGB' | 'HSL' | 'BRGB'
```
2. Add new color class extending `Color` with static `getRandomColor()` method
```ts
export class BRGB extends Color {
  constructor(...colorValues: [ColorValue, ColorValue, ColorValue]) {
    super(
      'BRGB',
      { unit: ColorUnit.Literal, value: colorValues[0] },
      { unit: ColorUnit.Literal, value: colorValues[1] },
      { unit: ColorUnit.Literal, value: colorValues[2] },
    )
  }

  static getRandomColor() {
    return new BRGB(
      getRandomNumber(0, 9999),
      getRandomNumber(0, 9999),
      getRandomNumber(0, 9999),
    )
  }
}
```
3. Add your class to `AvailableColors`
```ts
export const AvailableColors = [RGB, HSL, BGRB]
```
4. Implement some test for this new Color, then "BOOM" API part is done.

## Design Challenges
### DC#1: RGB and HSL has different representation in terms of Unit (RGB as literal, HSL with saturation and lightness as percentage)
**Solution:** Design Color component in the model as `{unit: ColorUnit, value: ColorValue}`, and use presenter to combined `unit` and `value` into one for ease of use in the front end side
### DC#2: Other color space may have any number of color components (RGBA with 4 color components)
**Solution:** Storing color component as a list extends compatibilty to color space with any number of color components

## Potential improvements
1. Redundant hard-coded minimum and maximum possible value of each component, might be able to lift it out or reuse it somehow.
2. `static` random color getter is not shared amoung the subclasses, each `getRandomeColor` is its own static method, with `AvailableColors` as a bridge.