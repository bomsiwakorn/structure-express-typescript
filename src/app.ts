import express, { Application } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { env } from './config/environment'

const app: Application = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

import TodoModule from './modules/todo/todo.module'

app.use('/todo', TodoModule)

app.listen(env.PORT, () => console.log(`Server is started at port ${env.PORT}`))