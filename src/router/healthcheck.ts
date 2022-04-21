import { Router } from 'express'
import { HealthcheckController } from '../controller'

export const healthcheckRouter = Router()

healthcheckRouter.get('/', HealthcheckController.get)
