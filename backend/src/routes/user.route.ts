import { Router } from "express";
import { createCurrentUser } from "../controller/user.controller";

const router = Router();

router.post("/", createCurrentUser);

export default router;
