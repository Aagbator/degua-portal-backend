import express from "express";
import { memberController } from "../controllers";

const router = express.Router();

router.get("/", memberController.getAllMembers);

export default router;
