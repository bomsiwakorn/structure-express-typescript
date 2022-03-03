import express from 'express'
const router = express.Router()

import { TodoController } from './controllers/todo.controller'

const todoController = new TodoController()

router.get('/', todoController.getTodoList)
router.get('/:todoId', todoController.getTodo)
router.post('/', todoController.createTodo)

export default router
