import { MONGO_URI, PORT, app } from ".";

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mjuntion", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log("🚀 Server is running on port:", PORT);
    });
  })
  .catch((err) => console.log("🔴 Error:", err));

export { sequelize };
