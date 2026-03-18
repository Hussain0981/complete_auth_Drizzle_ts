import express from "express";
import { createUser } from "../controller/user.controller";

const router = express.Router();

router.get("/", createUser);

export default router;