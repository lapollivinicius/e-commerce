export const logger = {
  info(message: string, data?: unknown) {
    console.log(`\x1b[36m[INFO]\x1b[0m ${message}`, data ?? "");
  },

  route(message: string, data?: unknown) {
    console.log(`\x1b[33m[ROUTE] \x1b[36m${message}`, data ?? "", "\x1b[0m");
  },

  warn(message: string, data?: unknown) {
    console.warn(`\x1b[33m[WARN]\x1b[0m ${message}`, data ?? "");
  },

  error(message: string, data?: unknown) {
    console.error(`\x1b[31m[ERROR]\x1b[0m ${message}`, data ?? "");
  },
};
