const {
  userGet,
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/", userGet);
router.get("/users", getUser);
router.post("/users", postUser);
router.put("/users/:id", putUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
