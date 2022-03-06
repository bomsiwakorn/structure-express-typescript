import { Request, Response } from 'express'
import { HttpStatus } from '../../../constants/HttpStatus'

import { JwtService } from '../../../services/jwt.service'
import { AuthService } from '../services/auth.service'

const jwtService = new JwtService()
const authService = new AuthService()
export class AuthController {
  public async register(req: Request, res: Response) {
    try {
      await authService.registerUser(req.body)
      return res
        .status(HttpStatus.CREATED)
        .json({ message: 'Register success.' })
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
  }

  public async refreshToken(req: Request, res: Response) {
    try {
      await jwtService.verify()
      return res.status(HttpStatus.OK).json({ message: '' })
    } catch (error) {
      console.log(error)
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
  }
}
