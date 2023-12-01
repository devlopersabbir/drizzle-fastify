import { buildServer } from "./server";

export const shoutDown = ({
  app,
}: {
  app: Awaited<ReturnType<typeof buildServer>>;
}) => {
  app.close();
};
