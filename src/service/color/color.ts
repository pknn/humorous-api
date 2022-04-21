import { AvailableColor, Color, ColorBuilder, RGBBuilder } from '../../model'

const getRandomColorBuilder = (): ColorBuilder<AvailableColor> =>
  new RGBBuilder()

export const getRandom5Colors = (): Color[] =>
  new Array(5).fill(0).map(() => getRandomColorBuilder().getRandomColor())
