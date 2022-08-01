import pg from 'pg'
import { PgConnection } from '../types'

export class Pool {
  private _pool: any = {} // TODO: change from type 'any' to a PG type

  async connect(options: PgConnection) {
    this._pool = new pg.Pool(options)
    return await this._pool.query('SELECT 1 + 1;')
  }

  async close() {
    return await this._pool.end()
  }

  async query<T>(sql: string, params?: T[]) {
    return await this._pool.query(sql, params)
  }
}
