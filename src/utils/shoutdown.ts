import { buildServer } from "./server";

export const gracefulShutdown = async ({
  app,
}: {
  app: Awaited<ReturnType<typeof buildServer>>;
}) => {
  app.close();
};
