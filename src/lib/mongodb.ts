import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/ting-global";

// Create a connection to MongoDB
const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("tried connecting");
    if (mongoose.connection.db) {
      console.log("Connected to database:", mongoose.connection.db.databaseName);
      return;
    } else {
      console.error("Failed to access the database connection.");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error connecting to MongoDB:", error.message);
      console.error("Stack trace:", error.stack);
    } else {
      console.error("Unknown error connecting to MongoDB:", error);
    }
  }
};
export default connectToDatabase;
