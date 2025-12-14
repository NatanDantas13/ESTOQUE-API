import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core';

export const company = mysqlTable('company', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
});
