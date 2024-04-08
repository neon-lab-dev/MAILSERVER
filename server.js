const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

//handling uncaught
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
});

//config
dotenv.config({ path: "./config/config.env" });

connectDB();


const server = app.listen(process.env.port, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});



//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting Down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
