const express = require("express");
const TinyUrl = require("../database/model");
const router = express.Router();
const { v4: uuidv4} = require("uuid");

router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

router.get("/new/:id", async (req, res) => {
  const url = await TinyUrl.findOne({ where: { shortUrl: req.params.id } });

  if (!url) return res.status(500).send("An error occured");
  else {
    return res.redirect(url.longUrl);
  }
});

router.post("/shortener", async (req, res) => {
  const url = await TinyUrl.findOne({ where: { longUrl: req.body.longUrl } });

  if (url !== undefined) {
    const urlCreated = await TinyUrl.create({
      longUrl: req.body.longUrl,
      shortUrl: uuidv4(),
    });

    res
      .status(200)
      .send(`http://localhost:5050/api/v1/new/${urlCreated.shortUrl}`);
  } else {
    res.status(500).send({ message: "internal server error" });
  }
});

module.exports = router;
