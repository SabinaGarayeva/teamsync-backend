import mongoose, { Document, Schema } from "mongoose";

export interface RoleDocument extends Document {
  name: string;
}
