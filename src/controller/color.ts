import { Request, Response } from 'express'
import { getColorPresenter } from '../presenter'
import { ColorService } from '../service'

export const get = (_: Request, response: Response) => {
  const colors = ColorService.getRandom5Colors()
  const colorsPresenter = colors.map(getColorPresenter)

  response.json(colorsPresenter)
}
