import "dotenv/config";
import app from "./app.ts";
import { setupDatabase } from "@/database/pool.js";
import { logger } from "@/helpers/logger.js";

const PORT = Number(process.env.PORT) || 3000;

async function start() {
  try {
    await setupDatabase();

    app.listen(PORT, () => {
      logger.info(`Server running on port http://localhost:${PORT}`);
    });

  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
}

start();