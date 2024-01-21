import mongoose from "mongoose";

const Connection = (username, password) => {
  const url = `mongodb://${username}:${password}@ac-fjmahpb-shard-00-00.eontf3u.mongodb.net:27017,ac-fjmahpb-shard-00-01.eontf3u.mongodb.net:27017,ac-fjmahpb-shard-00-02.eontf3u.mongodb.net:27017/TODO LIST APPLICATION
    ?ssl=true&replicaSet=atlas-jl6uom-shard-0&authSource=admin&retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("Database connected Successfully");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  mongoose.connection.on("error", () => {
    console.log("Error while connecting with the database ", error.message);
  });
};

export default Connection;
