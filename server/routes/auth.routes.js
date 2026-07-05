import { Router } from "express";
import { signIn, signOut, signUp, resetPassword, getCurrentUser } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp)
authRouter.post("/sign-in", signIn)
authRouter.get("/me", authMiddleware, getCurrentUser)
authRouter.post("/sign-out", authMiddleware, signOut)
authRouter.post("/forgot-password", resetPassword)

export default authRouter