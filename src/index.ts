import { getApplication } from './express'
import { getEnvironment } from './utils/environment'

const { host, port } = getEnvironment()
const application = getApplication()

application.listen(port, host, () => {
  console.log(`Application is running on http://${host}:${port}`)
})
