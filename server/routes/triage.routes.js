import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js"
import { updatePriority, updateAssignee, updateStatus, updateSeverity, addComment } from "../controllers/triageController.js";


const triageRouter = Router()

triageRouter.patch("/:id/priority", authMiddleware, updatePriority)
triageRouter.patch("/:id/assignee", authMiddleware, updateAssignee)
triageRouter.patch("/:id/status", authMiddleware, updateStatus)
triageRouter.patch("/:id/severity", authMiddleware, updateSeverity)
triageRouter.post("/:id/comment", authMiddleware, addComment)

export default triageRouter