const nanoid = require("nanoid");
const validUrl = require("valid-url");
const URL = require("../models/schema.js");

module.exports = {
  POST: async function (req, res) {
    const longUrl = req.body.url_input;
    const urlId = nanoid(7);
    const baseUrl = "http://localhost:3000/api/shorturl/";

    if (!validUrl.isWebUri(longUrl)) {
      res.status(401).json({
        error: "invalid URL",
      });
    } else {
      try {
        let urlSubmitted = await URL.findOne({
          long_url: longUrl,
        });
        if (urlSubmitted) {
          return res.status(200).json(urlSubmitted);
        } else {
          urlSubmitted = new URL({
            long_url: longUrl,
            short_url: baseUrl + urlId,
            url_id: urlId,
          });
          await urlSubmitted.save();
          return res.status(201).json(urlSubmitted);
        }
      } catch (err) {
        console.error(err);
        res.status(500).json("Server error!");
      }
    }
  },
  GET: async function (req, res) {
    try {
      const urlParams = await URL.findOne({
        url_id: req.params.url_id,
      }).exec();

      if (urlParams) {
        return res.redirect(urlParams.long_url);
      } else {
        return res.status(404).json("Sorry, no URL found.");
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Server error!");
    }
  },
};
