import type { Config } from "drizzle-kit";

export default {
  out: "./migrations",
  schema: "./src/schema/*",
  breakpoints: false,
} satisfies Config;
