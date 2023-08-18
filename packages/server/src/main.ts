import express from 'express'
import cors from 'cors'
import bearerToken from 'express-bearer-token'
const port = 8083

/**
 * createExpressApp
 */

async function createExpressApp() {
  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(
    bearerToken({
      cookie: {
        signed: true,
        secret: 'adalkjsdfh-adsjfalksdjfh-asdfdsa',
        key: 'access_token',
      },
    })
  )
  return app
}
/**
 * start
 */
async function start() {
  try {
    const expressApp = await createExpressApp()
    console.info('express server is almost ready ⏱️')
    expressApp.listen(port, () =>
      console.info(`server listening on port ${port} ✅`)
    )
  } catch (error) {
    console.info(error)
    process.exit(1)
  }
}
start()
