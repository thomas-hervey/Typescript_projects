import * as express from 'express'
import * as bodyParser from 'body-parser'

class ExpressServer {
  public app: express.Application

  constructor(controllers: any[]) {
    this.app = express.default()

    this.initializeMiddlewares()
    this.initializeControllers(controllers)
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json())
  }

  private initializeControllers(controllers: any[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router)
    })
  }
}

export default ExpressServer
