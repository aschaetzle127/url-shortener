const urls = require("./urls.js");

module.exports = function (app) {
  app.post("/api/shorturl/create", urls.POST);
  app.get("/u/:url_id", urls.GET);
};
