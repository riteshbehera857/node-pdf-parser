import { MONGO_URI, PORT, app } from ".";

import mongoose from "mongoose";

const DB = MONGO_URI!.replace("<PASSWORD>", process.env.MONGO_PASS!);

mongoose
  .connect(DB!)
  .then((conn) => {
    console.log("Database connected to:", conn.connection.host);
    app.listen(PORT, () => {
      console.log("🚀 Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
