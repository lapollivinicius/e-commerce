import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { Pool } from "pg";

export function connectDatabase(): Pool {
  return new Pool({
    connectionString: process.env.DATABASE_URL!,
  });
}

export async function setupDatabase(): Promise<void> {
  const database = connectDatabase();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = join(__filename, "..");
  const path = join(__dirname, "migrations", "001_migration.sql");
  const migration = await readFile(path, "utf-8");

  await database.query(migration);
}
