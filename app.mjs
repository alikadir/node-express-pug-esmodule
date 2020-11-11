import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

const __dirname = path.resolve();

import apiUsersRouter from "./routes/api/users.mjs";
import usersRouter from "./routes/users.mjs";
import indexRouter from "./routes/index.mjs";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/users", apiUsersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || "3000", () => {
  console.log("web site running");
});
