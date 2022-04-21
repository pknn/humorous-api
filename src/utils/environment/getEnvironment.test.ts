import { Environment } from './environment'
import { DEFAULT_HOST, DEFAULT_PORT, getEnvironment } from './getEnvironment'

type EnvVar = string | undefined
type TestCase = [Environment, EnvVar, EnvVar]

const testCases: TestCase[] = [
  [
    {
      host: DEFAULT_HOST,
      port: DEFAULT_PORT,
    },
    undefined,
    undefined,
  ],
  [
    {
      host: 'luckyboi.dev',
      port: DEFAULT_PORT,
    },
    'luckyboi.dev',
    undefined,
  ],
  [
    {
      host: DEFAULT_HOST,
      port: 3000,
    },
    undefined,
    '3000',
  ],
  [
    {
      host: 'luckyboi.dev',
      port: 3000,
    },
    'luckyboi.dev',
    '3000',
  ],
]

const setup = (HOST: EnvVar, PORT: EnvVar) => {
  process.env = {
    ...process.env,
    HOST,
    PORT,
  }
}

describe('getEnvironment', () => {
  it.each(testCases)(
    'should return %s as environment when host is %s and port is %s',
    (expectedEnvironment, hostEnv, portEnv) => {
      setup(hostEnv, portEnv)
      const result = getEnvironment()

      expect(result).toStrictEqual(expectedEnvironment)
    },
  )
})
