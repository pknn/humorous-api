import { AvailableColorKey, Color } from 'src/model'
type ColorValue = string

export interface ColorPresenter {
  type: AvailableColorKey
  components: ColorValue[]
}

export const getColorPresenter = ({
  type,
  components,
  units,
}: Color): ColorPresenter => ({
  type,
  components: components.map(
    (component, index) => `${component}${units[index]}`,
  ),
})
