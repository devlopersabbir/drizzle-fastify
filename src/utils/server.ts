import Fastify from "fastify";

export const buildServer = async () => {
  const app = Fastify({
    logger: true,
  });
  // register all plugin

  // register all routes
  return app;
};
