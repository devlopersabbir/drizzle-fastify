import zennv from "zennv";
import { z } from "zod";

export const env = zennv({
  dotenv: true,
  schema: z.object({
    PORT: z.number().default(4000),
    HOST: z.string().default("localhost"),
    DATABASE_CONNECTION_URL: z.string(),
  }),
});
