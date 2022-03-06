import { createConnection } from 'typeorm'
import { env } from './environment'
export class Connection {
  public async create() {
    return await createConnection({
      type: 'mysql',
      host: env.DB_HOST,
      username: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
      entities: ['src/modules/**/entities/*.entity{.ts,.js}'],
      logging: true,
      synchronize: true,
    })
  }
}
