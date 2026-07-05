import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js"
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js";

const userRouter = Router()

// Get all users
userRouter.get("/", authMiddleware, getAllUsers)

// Get user by id
userRouter.get("/:userId", authMiddleware, getUser)

// Delete a user
userRouter.delete("/:userId", authMiddleware, deleteUser)

// Update user
userRouter.put("/:userId", authMiddleware, updateUser)

export default userRouter