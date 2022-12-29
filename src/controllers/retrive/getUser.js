const retriveRouter = require("../../routes/retriveRouter");
const registerUser = require("../../models/register");

const handler = async (req, res) => {
    try {
        const { userId } = req.query;
        const result = await registerUser.findOne({ _id: userId });
        if(result) res.json({ msg: "User Details Data Fetched", result });
    } catch (err) {
        res.json({ result: err.message });
    }
}

retriveRouter.get("/user", handler);