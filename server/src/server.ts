import "dotenv/config";

import app from "./app.ts";
import { setupDatabase } from "@/database/pool.js";

const PORT = Number(process.env.PORT) || 3000;

async function start() {
  try {
    await setupDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

start();