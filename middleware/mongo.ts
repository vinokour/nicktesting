import mongoose, { ConnectOptions } from "mongoose";

let mongo;

if (mongoose.connections[0].readyState) {
  mongo = mongoose.connections[0];
} else {
  mongo = mongoose
    .connect(
      process.env.MONGODB_URI as string,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      } as ConnectOptions
    )
    .then(() => {
      console.log("Connected to MongoDB");
    });
}

export default mongo;
