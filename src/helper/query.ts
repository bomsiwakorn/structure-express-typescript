import { db } from '../config/connection'

export const query = (sql: string, values: unknown) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (error, result) => {
      if (error) return reject(error)
      return resolve(result)
    })
  })
}
