import { Request, Response } from 'express'
import { HttpStatus } from '../model'

export const get = (_: Request, response: Response) => {
  response.sendStatus(HttpStatus.OK)
}
