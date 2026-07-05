import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { addOrganizationMember, createOrganization, deleteOrganization, deleteOrganizationMember, getAllOrganization, getOrganization, getOrganizationMember, updateOrganization } from "../controllers/organizationController.js";

const orgRouter = Router()

orgRouter.post("/", authMiddleware, createOrganization)
orgRouter.get("/:organizationId", authMiddleware, getOrganization)
orgRouter.get("/", authMiddleware, getAllOrganization)
orgRouter.delete("/:organizationId", authMiddleware, deleteOrganization)
orgRouter.put("/:organizationId", authMiddleware, updateOrganization)
orgRouter.post("/:organizationId/members", authMiddleware, addOrganizationMember)
orgRouter.get("/:organizationId/members/:id", authMiddleware, getOrganizationMember)
orgRouter.delete("/:organizationId/members/:id", authMiddleware, deleteOrganizationMember)

export default orgRouter

