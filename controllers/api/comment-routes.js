const router = require("express").Router();
const { comment } = require("../../models");

// route: /api/coins
router.get("/", (req, res) => {
  comment
    .findAll({
      //attributes of the comments
    })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
