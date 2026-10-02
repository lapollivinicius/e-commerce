import "dotenv/config";
import { database } from "@/database/pool.js";
import { randomUUID } from "node:crypto";

async function seedImage() {
  const images = `
    INSERT INTO images (image_id, product_id, url, alt, is_thumbnail)
    VALUES ($1, $2, $3, $4, $5);
  `;

  await database.query(images, [
    randomUUID(),
    "55cccb95-5754-4bf0-a11d-5c786dea4f8d",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "This T-SHIRT is nice",
    true,
  ]);
  await database.query(images, [
    randomUUID(),
    "55cccb95-5754-4bf0-a11d-5c786dea4f8d",
    "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "This T-SHIRT is nice",
    false,
  ]);

  await database.query(images, [
    randomUUID(),
    "4141e135-b06c-4c16-a00e-baa11f92435b",
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "This 'paint' is nice",
    true,
  ]);
  await database.query(images, [
    randomUUID(),
    "4141e135-b06c-4c16-a00e-baa11f92435b",
    "https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "This 'paint' is nice",
    false,
  ]);
}
seedImage();
