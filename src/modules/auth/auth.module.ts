import express from 'express'
const router = express.Router()

import { AuthController } from './controllers/auth.controller'

const authController = new AuthController()

router.post('/register', authController.register)
router.post('/refresh-token', authController.refreshToken)

export default router
