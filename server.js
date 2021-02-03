"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const dbUri = process.env.MONGO_URI;
const URL = require("./server/models/schema.js");

//Database Connection
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
});

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
  console.log("MongoDB connection successful!");
});

URL.createCollection();

//Initial Configurtion
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

// Initialize API routes
const routes = require("./server/routes");
routes(app);
