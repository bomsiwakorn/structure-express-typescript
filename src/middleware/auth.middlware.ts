import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

export const AuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.headers['authorization']?.split(' ')[1]
    console.log(user)
    return next()
  } catch (error) {}
}
