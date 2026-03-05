import { mysqlTable, int, varchar, timestamp } from 'drizzle-orm/mysql-core';

export const userTable = mysqlTable('user', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).unique(),
  password: varchar('password', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow().onUpdateNow(),
});
