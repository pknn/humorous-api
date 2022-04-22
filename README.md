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
  constructor(...colorComponents: ColorComponent[]) {
    super('BRGB', ...colorComponents)
  }

  static getRandomColor() {
    return new BRGB(
      {
        unit: ColorUnit.Literal,
        value: getRandomNumber(0, 9999),
      },
      {
        unit: ColorUnit.Literal,
        value: getRandomNumber(0, 9999),
      },
      {
        unit: ColorUnit.Literal,
        value: getRandomNumber(0, 9999),
      },
    )
  }
}
```
3. Add your class to `AvailableColors`
```ts
export const AvailableColors = [RGB, HSL, BGRB]
```
4. Implement some test for this new Color, then "BOOM" API part is done.
