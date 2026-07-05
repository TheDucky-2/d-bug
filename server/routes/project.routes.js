import { createProject, deleteProject, getAllProjects, getProject, getProjectMembers, getRepos, importIssues, linkRepoToProject, unlinkRepoFromProject, updateProject } from "../controllers/projectController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { Router } from "express";

const projectRouter = Router()

projectRouter.post("/", authMiddleware, createProject)
projectRouter.get("/:projectId", authMiddleware, getProject)
projectRouter.get("/", authMiddleware, getAllProjects)
projectRouter.delete("/:projectId", authMiddleware, deleteProject)
projectRouter.put("/:projectId", authMiddleware, updateProject)
projectRouter.get("/:projectId/members", authMiddleware, getProjectMembers)
projectRouter.post("/:projectId/github", authMiddleware, linkRepoToProject)
projectRouter.get("/:projectId/github", authMiddleware, getRepos)
projectRouter.delete("/:projectId/github", authMiddleware, unlinkRepoFromProject)
projectRouter.post("/:projectId/github/issues", authMiddleware, importIssues)

export default projectRouter