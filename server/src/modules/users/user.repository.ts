import { database } from "@/database/pool.js";

export async function findUserByEmail(email: string) {
  const { rows } = await database.query(
    `
    SELECT * FROM users
    WHERE email = $1
    `,
    [email],
  );
  return rows;
}

export async function createUser({
  user_id,
  email,
  passwordHash,
}: {
  user_id: String;
  email: string;
  passwordHash: string;
}): Promise<number | null> {
  const all = await database.query(
    `
    INSERT INTO users (user_id, email, password, is_active)
    VALUES ($1, $2, $3, true);
    `,
    [user_id, email, passwordHash],
  );
  return all.rowCount;
}
