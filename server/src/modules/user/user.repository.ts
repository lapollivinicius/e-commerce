import { database } from "@/database/pool.js";
import type { userIdType, userType } from "@/modules/user/user.schema.js";

export async function findUserByEmail(email: string): Promise<userType> {
  const { rows } = await database.query(
    `
    SELECT * FROM users
    WHERE email = $1
    LIMIT 1;
    `,
    [email],
  );
  return rows[0];
}

export async function findUserById(user_id: userIdType): Promise<userType> {
  const { rows } = await database.query(
    `
    SELECT * FROM users
    WHERE user_id = $1
    LIMIT 1
    `,
    [user_id],
  );
  return rows[0];
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
