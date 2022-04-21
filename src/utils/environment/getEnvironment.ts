import { Environment } from './environment'

export const DEFAULT_HOST = 'localhost'
export const DEFAULT_PORT = 3000

export const getEnvironment = (): Environment => {
  const { HOST, PORT } = process.env

  return {
    host: HOST ?? DEFAULT_HOST,
    port: Number(PORT) || DEFAULT_PORT,
  }
}
