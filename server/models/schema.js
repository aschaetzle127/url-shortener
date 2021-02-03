const { Schema, model } = require("mongoose");

const urlSchema = new Schema({
  short_url: String,
  long_url: String,
  url_id: String,
});

module.exports = model("urls", urlSchema);
