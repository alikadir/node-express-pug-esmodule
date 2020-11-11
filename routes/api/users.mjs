import users from "../../data/globalUserList.mjs";
import express from "express";
const router = express.Router();

router.get("/:id", (req, res, next) => {
  res.json(users.find((x) => x.id == req.params.id));
});

router.get("/", (req, res, next) => {
  res.json(users);
});

router.post("/", function (req, res, next) {
  const newUser = req.body;
  users.push(newUser);
  res.send("OK");
});

router.put("/", (req, res, next) => {
  const updatedUser = req.body;
  users.forEach((item) => {
    if (item.id === updatedUser.id) {
      item.name = updatedUser.name;
      item.age = updatedUser.age;
    }
  });
  res.redirect("/api/users/" + updatedUser.id);
});

export default router;
