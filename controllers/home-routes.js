const router = require("express").Router();
const { Wallet, Coin, User } = require("../models");

router.get("/", async (req, res) => {
  res.render("main");
});

module.exports = router;
