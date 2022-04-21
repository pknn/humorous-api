import { Request, Response } from 'express'
import { ColorService } from '../service'

export const get = (_: Request, response: Response) => {
  const colors = ColorService.getRandom5Colors()

  response.json(colors)
}
