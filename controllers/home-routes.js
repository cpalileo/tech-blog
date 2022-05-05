const router = require("express").Router();
// const { login } = require("../models");

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
