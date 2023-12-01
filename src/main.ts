import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { buildServer } from "./utils/server";
import { env } from "./configs/env";
import { signals } from "./constants/signals";
import { shoutDown } from "./utils/shoutdown";
import { logger } from "./utils/logger";
/**
 * Run the server
 */
const main = async () => {
  const app: FastifyInstance = await buildServer();
  try {
    await app.listen({ port: env.PORT, host: env.HOST });
    console.log(`Server is listening at http://${env.HOST}:${env.PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  } finally {
    for (const signal of signals) {
      process.on(signal, () => {
        shoutDown({
          app,
        });
      });
    }
  }
};
main();
