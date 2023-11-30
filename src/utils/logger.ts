import pino from "pino";

// logger
export const logger = pino({
  transport: {
    target: "pino-prettry",
  },
});
