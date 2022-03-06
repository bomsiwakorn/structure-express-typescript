import { Request, Response } from 'express'
import { HttpStatus } from '../../../constants/HttpStatus'

import { TodoService } from '../services/todo.service'

export class TodoController {
  todoService = new TodoService()

  public async getTodoList(req: Request, res: Response) {
    try {
      const todos = await this.todoService.getTodoList()
      console.log(todos)
      return res.status(HttpStatus.OK).json({ message: todos })
    } catch (error) {
      console.log(error)
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
  }

  public async getTodo(req: Request, res: Response) {
    try {
      const todos = await this.todoService.getTodoList()
      console.log(todos)
      return res.status(HttpStatus.OK).json({ message: todos })
    } catch (error) {
      console.log(error)
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
  }

  public async createTodo(req: Request, res: Response) {
    try {
      console.log('createTodoController -> ', req.body)
      return res.status(HttpStatus.OK).json({ message: req.body })
    } catch (error) {
      console.log('error ->', error)
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
  }
}
