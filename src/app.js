import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import moment from "moment-timezone";
import compression from "compression";
const app = express();
//morgan: log when users send a request
// app.use(morgan("dev"));

// morgan("combined");
// morgan("common");
// morgan("short");
// morgan("tiny");
morgan.token("date", (req, res, tz) => {
  return moment().tz(tz).format("YYYY--MM--DD HH:mm:ss");
});

//init middlewares
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[America/New_York]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
  )
);

app.use(helmet());
app.use(compression());
//init db
import "./dbs/init.mongodb.js";
import countConnect from "./helpers/check.connect.js";
//init routes
app.get("/", (req, res, next) => {
  const str = "helloooo";
  return res.status(500).json({
    message: "Hello World",
    metadata: str.repeat(10000),
  });
});
//handling errors

export default app;
