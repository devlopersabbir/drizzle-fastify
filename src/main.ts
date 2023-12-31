import { FastifyInstance } from "fastify";
import { buildServer } from "./utils";
import { env } from "./configs";
import { signals } from "./constants";
import { shoutDown } from "./utils";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./database";
/**
 * Run the server
 */
const main = async () => {
  const app: FastifyInstance = await buildServer();
  try {
    await migrate(db, {
      migrationsFolder: "./migrations",
    });
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
