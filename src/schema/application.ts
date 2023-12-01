import { pgTable, serial, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const applications = pgTable("applications", {
  id: serial("id"),
  uuid: uuid("uuid").primaryKey().defaultRandom(),
  name: varchar("name", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
