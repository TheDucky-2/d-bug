import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { reportBug, getBugs, getBugById, deleteBug, updateBug } from "../controllers/bugController.js";

const bugRouter = Router()

bugRouter.post("/", authMiddleware, reportBug)
bugRouter.get("/", authMiddleware, getBugs)
bugRouter.get("/:id", authMiddleware, getBugById)
bugRouter.delete("/:id", authMiddleware, deleteBug)
bugRouter.put("/:id", authMiddleware, updateBug)

export default bugRouter

