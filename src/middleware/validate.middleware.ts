import { Request, Response, NextFunction, RequestHandler } from 'express'
import { HttpStatus } from '../constants/HttpStatus'
import { ClassConstructor, plainToClass } from 'class-transformer'
import { validate } from 'class-validator'

export const ValidateMiddleware = (
  type: ClassConstructor<unknown>,
  skipMissingProperties = false
): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const data = plainToClass(type, req.body)
    const errors = await validate(data as ClassConstructor<unknown>, {
      skipMissingProperties,
    })

    if (errors.length) return res.status(HttpStatus.BAD_REQUEST).json(errors)
    return next()
  }
}
