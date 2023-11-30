import Fastify from "fastify";
import { logger } from "./logger";

export const buildServer = async () => {
  const app = Fastify({
    logger: logger,
  });
  // register all plugin

  // register all routes
  return app;
};
