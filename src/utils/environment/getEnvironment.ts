import { Environment } from './environment'

export const getEnvironment = (): Environment => {
  const { HOST, PORT } = process.env

  return {
    host: HOST ?? 'localhost',
    port: Number(PORT) || 3000,
  }
}
