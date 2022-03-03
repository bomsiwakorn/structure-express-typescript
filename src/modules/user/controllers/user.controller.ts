import { Request, Response } from 'express'
import { HttpStatus } from '../../../constants/HttpStatus'

import { UserService } from '../services/user.service'

export class UserController {
  userService = new UserService()

  public async getUserList(req: Request, res: Response) {
    try {
      const todos = await this.userService.getTodo()
      console.log(todos)
      return res.status(HttpStatus.OK).json({ message: todos })
    } catch (error) {
      console.log(error)
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
  }
}
