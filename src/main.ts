import { buildServer } from "./utils/server";
import { signals } from "./constant/signals";
import { gracefulShutdown } from "./utils/shoutdown";
import { env } from "./configs/env";

const main = async () => {
  const app = await buildServer();
  await app.listen({
    port: env.PORT,
    host: env.HOST,
  });
  // ShoutDown server besed on signal
  for (const signal of signals) {
    process.on(signal, () => {
      gracefulShutdown({
        app,
      });
    });
  }
};

main();
