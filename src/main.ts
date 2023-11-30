import dotenv from "dotenv";
import { buildServer } from "./utils/server";
import { logger } from "./utils/logger";
dotenv.config();

const PORT = Number(process.env.PORT) || 4000;
const main = async () => {
  const app = await buildServer();
  app.listen({
    port: PORT,
  });
  logger.info(`Server is running at http://localhost:${PORT}`);
};

main();
