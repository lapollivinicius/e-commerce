import 'dotenv/config'
import { database } from "@/database/pool.js";
import { randomUUID } from "node:crypto";

async function seedInformation() {
  const information = `
    INSERT INTO informations ( 
      information_id, 
      user_id,
      first_name, 
      last_name, 
      document, 
      street,
      number, 
      neighborhood, 
      city, 
      state, 
      country, 
      postal_code, 
      complement
    ) 
    VALUES(
      $1,
      $2,
      'john',
      'doe',
      '123.123.123.12',
      'barkley, street',
      '10',
      '001',
      'brooklyn',
      'new york',
      'usa',
      '0000000',
      'none'
    );
  `;
  await database.query(information, [randomUUID(), "8f98f4a5-67e7-46e0-b8dc-ee580682d3d5"])
}
seedInformation();
