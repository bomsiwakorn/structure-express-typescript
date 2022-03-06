import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { env } from './config/environment'

import { AuthMiddleware } from './middleware/auth.middlware'

import AuthModule from './modules/auth/auth.module'
import TodoModule from './modules/todo/todo.module'
class Server {
  private app: Application

  constructor() {
    this.app = express()
    this.configuration()
    this.moduleRegistry()
  }

  public start() {
    this.app.listen(env.PORT, () =>
      console.log(`Server is started at port ${env.PORT}`)
    )
  }

  private configuration() {
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())

    this.app.use(cors())
  }

  private moduleRegistry() {
    this.app.use('/auth', AuthModule)
    this.app.use('/todo', AuthMiddleware, TodoModule)
  }
}

const server = new Server()
server.start()
