import { PermissionType, Permissions } from "../enums/role.enum";
import { UnauthorizedException } from "./appError";
import { RolePermissions } from "./role-permission";

export const roleGuard = (
  role: keyof typeof RolePermissions,
  requiredPermissions: PermissionType[]
) => {
  const permissions = RolePermissions[role];
  // if the role doenst exist or acks required permissions

  const hasPermission = requiredPermissions.every((permisson) =>
    permissions.includes(permisson)
  );

  if (!hasPermission) {
    throw new UnauthorizedException(
      "You do now have the necessary permissions to perform the action"
    );
  }
};
