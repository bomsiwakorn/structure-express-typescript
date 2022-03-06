import { body } from 'express-validator'

export const validateRequestTodo = [
  body('title').not().isEmpty().isLength({ min: 6 }),
  body('description').not().isEmpty().isLength({ min: 6 }),
]
