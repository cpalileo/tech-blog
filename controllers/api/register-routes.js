const router = require("express").Router();
const { register } = require("../../models");

router.get("/", (req, res) => {
  register
    .findAll({})
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
