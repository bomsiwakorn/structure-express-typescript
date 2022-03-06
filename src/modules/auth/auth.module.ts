import express from 'express'
const router = express.Router()

import { ValidateMiddleware } from '../../middleware/validate.middleware'
import { CreateUserRequest } from '../../modules/user/requests/user.request'

import { AuthController } from './controllers/auth.controller'
const authController = new AuthController()

router.post(
  '/register',
  ValidateMiddleware(CreateUserRequest),
  authController.register
)
router.post('/refresh-token', authController.refreshToken)

export default router
