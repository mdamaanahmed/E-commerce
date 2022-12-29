const express = require("express");
const apiRouter = require("./apiRouter");

const createRouter = express.Router();
apiRouter.use("/create", createRouter)

module.exports = createRouter;