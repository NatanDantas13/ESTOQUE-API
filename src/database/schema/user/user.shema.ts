import { mysqlTable, int, varchar, timestamp } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).unique(),
  password: varchar('password', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').notNull(),
  updatedAt: timestamp('updatedAt'),
});
