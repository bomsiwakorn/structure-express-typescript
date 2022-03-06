import { UserRepository } from '../../user/repositories/user.repository'
import { CreateUserRequest } from '../../user/requests/user.request'
import { v4 as uuidV4 } from 'uuid'

const userRepository = new UserRepository()
export class AuthService {
  public async registerUser(user: CreateUserRequest) {
    try {
      return await userRepository.createUser({
        uuid: uuidV4(),
        ...user,
      })
    } catch (error) {
      throw error
    }
  }
}
