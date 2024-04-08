const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");   

//config
dotenv.config({ path: "./config/config.env" });

app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const emailroute = require("./routes/routes");

app.use("/api/v1", emailroute);



module.exports = app;

app.get("/", (req, res) => res.send(`<h1>Email Server is working</h1>`));


//middleware
app.use(errorMiddleware);
