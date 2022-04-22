import { getRandomElement } from '../../utils/random'
import { AvailableColors, Color } from '../../model'

const getRandomColor = () => getRandomElement(AvailableColors).getRandomColor()

export const getRandom5Colors = (): Color[] =>
  new Array(5).fill(0).map(() => getRandomColor())
