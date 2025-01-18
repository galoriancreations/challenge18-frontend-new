import mongoose, { Schema, model, models } from "mongoose";

// Define the User schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Export the User model
const User = models.User || model("User", UserSchema);
export default User;
