import { Router } from 'express'
import { ColorController } from '../controller'

export const colorRouter = Router()

colorRouter.get('/', ColorController.get)
