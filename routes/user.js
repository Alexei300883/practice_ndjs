const express = require("express");
const router = express.Router();



router.get("/user/login", (req, res) => {
  const login = { id: 1, mail: "test@mail.ru" };
  res.json(login);
});

module.exports = router;
