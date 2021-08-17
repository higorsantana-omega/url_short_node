import { config } from "../config/Constants";
import mongoose from "mongoose";

class MongoConnection {
  async connect(): Promise<void> {
    try {
      await mongoose.connect(config.MONGO_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database is connected");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
}

export { MongoConnection };
