export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const getRandomElement = <T>(list: T[]): T =>
  list[getRandomNumber(0, list.length - 1)] as T
