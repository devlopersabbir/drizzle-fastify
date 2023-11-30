import dotenv from "dotenv";
import { buildServer } from "./utils/server";
dotenv.config();

const main = async () => {
  const app = await buildServer();
  app.listen(
    {
      port: Number(process.env.PORT) || 4000,
    },
    () => console.log("Server is running!")
  );
};

main();
