import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "../configs/env";

const pool = new Pool({
  connectionString: env.DATABASE_CONNECTION_URL,
  ssl: true,
});

export const db = drizzle(pool);
