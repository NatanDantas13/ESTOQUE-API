import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

@Injectable()
export class DrizzleService implements OnModuleDestroy {
  private readonly pool;
  public readonly db;

  constructor() {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
      throw new Error('DATABASE_URL não definida');
    }

    this.pool = mysql.createPool({
      uri: databaseUrl,
    });

    this.db = drizzle(this.pool, {
      schema,
      mode: 'default',
    });
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
