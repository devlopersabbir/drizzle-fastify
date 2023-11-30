import zennv from "zennv";
import { z } from "zod";

export const env = zennv({
  dotenv: true,
  schema: z.object({
    PORT: z.number().default(4000),
    HOST: z.string().default("0.0.0.0"),
  }),
});

// export default {
//   PORT: Number(process.env.PORT),
//   DB_NAME: process.env.DB_NAME,
//   DB_USER: process.env.DB_USER,
//   DB_PASSWORD: process.env.DB_PASSWORD,
//   DB_HOST: process.env.DB_HOST,
// };
