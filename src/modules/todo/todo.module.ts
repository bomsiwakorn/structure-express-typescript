import express from 'express'
const router = express.Router()

import { ValidateMiddleware } from '../../middleware/validate.middleware'
import { body } from 'express-validator'

import { TodoController } from './controllers/todo.controller'
import { validateRequestTodo } from './requests/todo.request'
const todoController = new TodoController()

router.get('/', todoController.getTodoList)
router.get('/:todoId', todoController.getTodo)
router.post(
  '/',
  ValidateMiddleware(validateRequestTodo),
  todoController.createTodo
)

export default router
