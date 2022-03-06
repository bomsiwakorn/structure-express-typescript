import { UserEntity } from '../entities/user.entity'

import { Connection } from '../../../config/connection'

const connection = new Connection()
export class UserRepository {
  public async createUser(user: UserEntity) {
    const db = await connection.create()
    return await db.getRepository(UserEntity).save(user)
  }
}
