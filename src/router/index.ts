import { Router } from 'express'
import { colorRouter } from './color'
import { healthcheckRouter } from './healthcheck'

export const router = Router()

router.use('/healthcheck', healthcheckRouter)
router.use('/colors', colorRouter)
