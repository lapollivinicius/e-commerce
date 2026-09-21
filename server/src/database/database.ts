import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { Pool } from "pg";

export class database {
  static connect(): Pool {
    return new Pool({ connectionString: process.env.DATABASE_URL! });
  }

  static async setup(database: Pool) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = join(__filename, "..");

    const path = join(__dirname, "migrations", "001_migration.sql");
    const migration = await readFile(path, "utf-8");

    await database.query(migration);
  }
}
