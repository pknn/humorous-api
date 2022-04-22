import { AvailableColorKey, Color } from 'src/model'
type ColorValue = string

export interface ColorPresenter {
  type: AvailableColorKey
  components: ColorValue[]
}

export const getColorPresenter = ({
  type,
  components,
}: Color): ColorPresenter => ({
  type,
  components: components.map(({ value, unit }) => `${value}${unit}`),
})
