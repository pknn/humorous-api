import express from 'express'
import morgan from 'morgan'
import { router } from './router'

export const getApplication = () => express().use(morgan('dev')).use(router)
