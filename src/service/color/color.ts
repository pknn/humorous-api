import { getRandomElement } from '../../utils/random'
import { AvailableColors, Color } from '../../model'

const getRandomColor = () => new (getRandomElement(AvailableColors))()

export const getRandom5Colors = (): Color[] =>
  new Array(5).fill(0).map(() => getRandomColor())
