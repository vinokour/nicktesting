import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { IMongoSchema } from "../../interfaces";

export default mongoose.models.Example ||
  mongoose.model<IMongoSchema>(
    "Example",
    new mongoose.Schema({
      _id: { type: ObjectId, required: true },
    })
  );
