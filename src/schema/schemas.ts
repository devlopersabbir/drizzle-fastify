import {
  pgTable,
  primaryKey,
  serial,
  timestamp,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const applications = pgTable("applications", {
  id: serial("id"),
  uuid: uuid("uuid").primaryKey().defaultRandom(),
  name: varchar("name", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const users = pgTable(
  "users",
  {
    id: serial("id"),
    uuid: uuid("uuid").primaryKey().defaultRandom(),
    name: varchar("name", { length: 256 }),
    email: varchar("email", { length: 256 }).notNull().unique(),
    applicationId: uuid("applicationId").references(() => applications.uuid),
    password: varchar("password", { length: 256 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (users) => {
    return {
      cpk: primaryKey(users.email, users.applicationId),
      idIndex: uniqueIndex("user_id_index").on(users.uuid),
    };
  }
);
