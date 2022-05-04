const router = require("express").Router();
const { post } = require("../../models");

// route: /api/coins
router.get("/", (req, res) => {
  post
    .findAll({
      //attributes of the posts
    })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
