import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IMongoSchema extends Document {
  _id: ObjectId;
}
