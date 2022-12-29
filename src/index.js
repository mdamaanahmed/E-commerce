const PORT = process.env.PORT || 3300;
const HOST = process.env.HOST || "localhost";
const app = require("./app");

const requireDir = require("require-dir");
requireDir("./controllers", {recurse: true});
requireDir("./routes");

const connectDb = require("./db/connectDb");
connectDb();

app.listen(PORT, HOST, () => {
    console.log(`Server is listening on ${HOST}:${PORT}`);
})