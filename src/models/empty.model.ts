import { Schema, model } from "mongoose";

export interface IEmpty {
  name: string;
  email: string;
}

const userSchema = new Schema<IEmpty>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const Empty = model<IEmpty>('User', userSchema);