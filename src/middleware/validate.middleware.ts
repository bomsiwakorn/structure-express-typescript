import { Request, Response, NextFunction } from 'express'
import { ValidationChain, validationResult } from 'express-validator'
import { HttpStatus } from '../constants/HttpStatus'

export const ValidateMiddleware = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)))

    const errors = validationResult(req)
    if (errors.isEmpty()) return next()
    return res.status(HttpStatus.BAD_REQUEST).json({ errors: errors.array() })
  }
}
