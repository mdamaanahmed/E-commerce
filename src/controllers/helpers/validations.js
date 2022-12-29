const apiRouter = require("../../routes/apiRouter");
const userToken = require("../../models/token");

apiRouter.post("/token-validator", async (req, res) => {
    const { token, id } = req.body;
    const idExist = await userToken.findOne({ userId: id });
    if (idExist) {
        if (idExist.tokens.find(s => s.token === token))
            res.json({ msg: "Login Successfully", icon: "success" });
        else
            res.json({ err: "Something wents wrong", icon: "error" });
    }
})