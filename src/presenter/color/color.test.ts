import { Color, HSL, RGB } from '../../model'
import { getColorPresenter } from './color'

const testCases: Color[] = [RGB.getRandomColor(), HSL.getRandomColor()]

describe('getColorPresenter', () => {
  it.each(testCases)(
    'should return correct presenter when color is %s',
    (color) => {
      const presenter = getColorPresenter(color)

      presenter.components.forEach((component, index) => {
        expect(component).toBe(
          `${color.components[index]?.value}${color.components[index]?.unit}`,
        )
      })
    },
  )
})
