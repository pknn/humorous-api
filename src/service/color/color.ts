import { getRandomElement } from '../../utils/random'
import {
  AvailableColor,
  AvailableColorBuilders,
  Color,
  ColorBuilder,
} from '../../model'

const getRandomColorBuilder = (): ColorBuilder<AvailableColor> =>
  getRandomElement(AvailableColorBuilders)

export const getRandom5Colors = (): Color[] =>
  new Array(5).fill(0).map(() => getRandomColorBuilder().getRandomColor())
