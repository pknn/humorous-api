import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './router'

export const getApplication = () =>
  express().use(cors()).use(morgan('dev')).use(router)
