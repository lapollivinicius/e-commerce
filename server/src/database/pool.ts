import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { Pool } from "pg";

export const database = new Pool({
    connectionString: process.env.DATABASE_URL!
})

export async function setupDatabase(): Promise<void> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = join(__filename, "..");
  const path = join(__dirname, "migrations", "001_migration.sql");
  const migration = await readFile(path, "utf-8");

  await database.query(migration);
}
