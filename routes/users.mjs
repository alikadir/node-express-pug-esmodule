import express from "express";
import users from "../data/globalUserList.mjs";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("users", { title: "users page title", users });
});

export default router;
