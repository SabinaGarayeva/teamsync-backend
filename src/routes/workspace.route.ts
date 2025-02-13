import { Router } from "express";
import { createWorkspaceController, getAllWorkspacesUserIsMemberController, getWorkspaceByIdController } from "../controllers/workspace.controller";

const workspaceRoutes = Router();

workspaceRoutes.post("/create/new", createWorkspaceController);

workspaceRoutes.post("/all", getAllWorkspacesUserIsMemberController);
workspaceRoutes.post("/:id", getWorkspaceByIdController);


export default workspaceRoutes;
