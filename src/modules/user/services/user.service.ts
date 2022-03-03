import { UserRepository } from '../repositories/user.repository'
const userRepository = new UserRepository()

export class UserService {
  async getTodo() {
    try {
      return await userRepository.find()
    } catch (error) {
      throw error
    }
  }
}
