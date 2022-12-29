const express = require("express");
const apiRouter = require("./apiRouter");

const updateRouter = express.Router();
apiRouter.use("/update", updateRouter)

module.exports = updateRouter;