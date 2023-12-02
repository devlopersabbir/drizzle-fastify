import Fastify, { FastifyInstance } from "fastify";
import { logger } from "./logger";

export const buildServer = async () => {
  const app: FastifyInstance = Fastify({
    logger,
  });
  /**
   * Register all routes
   * LIKE
   * AUTH
   * USER
   * ROLES
   */

  /**
   * Register all plugins
   */

  return app;
};
