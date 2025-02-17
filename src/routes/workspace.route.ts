import { Router } from "express";
import {
  changeWorkspaceMemberRoleController,
  createWorkspaceController,
  getAllWorkspacesUserIsMemberController,
  getWorkspaceAnalyticsController,
  getWorkspaceByIdController,
  getWorkspaceMembersController,
  updateWorkspaceByIdController,
} from "../controllers/workspace.controller";

const workspaceRoutes = Router();

workspaceRoutes.post("/create/new", createWorkspaceController);

workspaceRoutes.put("/update/:id", updateWorkspaceByIdController);

workspaceRoutes.put(
  "/change/member/role/:id",
  changeWorkspaceMemberRoleController
);

workspaceRoutes.get("/all", getAllWorkspacesUserIsMemberController);
workspaceRoutes.get("/members/:id", getWorkspaceMembersController);

workspaceRoutes.get("/analytics/:id", getWorkspaceAnalyticsController);

workspaceRoutes.get("/:id", getWorkspaceByIdController);

export default workspaceRoutes;
