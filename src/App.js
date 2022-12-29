const express = require("express");
const app = express();
const path = require("path");
const fileupload = require("express-fileupload");
require("dotenv").config();
app.use(express.json());
app.use(fileupload());
app.use(express.static(path.resolve('assets')));
app.use(express.static(path.resolve('frontend')));
app.set("views", "./frontend");
app.set("view engine", "ejs");

module.exports = app;