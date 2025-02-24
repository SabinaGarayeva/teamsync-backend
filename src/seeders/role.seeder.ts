import "dotenv/config";
import mongoose from "mongoose";
import connectDatabase from "../config/database.config";
import RoleModel from "../models/roles-permission.model";
import { RolePermissions } from "../utils/role-permission";

const seedRoles = async () => {
  console.log("🚀 Starting role seeding...");

  try {
    await connectDatabase();

    for (const roleName in RolePermissions) {
      const role = roleName as keyof typeof RolePermissions;
      const permissions = RolePermissions[role];

      const existingRole = await RoleModel.findOne({ name: role });
      if (!existingRole) {
        await RoleModel.create({ name: role, permissions });
        console.log(`✅ Role '${role}' added.`);
      } else {
        console.log(`🔄 Role '${role}' already exists. Skipping...`);
      }
    }

    console.log("🎉 Role seeding completed.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    process.exit(1);
  }
};

seedRoles().catch((error) => console.error("❌ Error running seed script:", error));

