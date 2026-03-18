import { db } from "../db";
import { users } from "../db/schema";

export const createUser = async () => {
  const result = await db.insert(users).values({
    name: "Hussain Ullah",
    email: "hussain@example.com",
  }).returning();

  return result;
};