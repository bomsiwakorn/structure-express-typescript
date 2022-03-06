import express from 'express'
const router = express.Router()

import { ValidateMiddleware } from '../../middleware/validate.middleware'
import { CreateTodoRequest } from './requests/todo.request'

import { TodoController } from './controllers/todo.controller'
const todoController = new TodoController()

router.get('/', todoController.getTodoList)
router.get('/:todoId', todoController.getTodo)
router.post(
  '/',
  ValidateMiddleware(CreateTodoRequest),
  todoController.createTodo
)

export default router
