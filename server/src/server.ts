import { MONGO_URI, PORT, app } from ".";

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  "admin",
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log("🚀 Server is running on port:", PORT);
    });
  })
  .catch((err: Error) => console.log("🔴 Error:", err));

export { sequelize };
