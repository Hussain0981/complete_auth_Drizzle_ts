import express from "express";
import { db } from "./db";
import { users } from "./db/schema";

const app = express();
app.use(express.json());

app.post("/users", async (_, res) => {
  const allUsers = await db.select().from(users);
  res.json(allUsers);
});

app.get("/users", async (req, res) => {
  const { name, email } = req.body;
  const newUser = await db.insert(users).values({ name, email }).returning();
  res.status(201).json(newUser);
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
