const retriveRouter = require("../../routes/retriveRouter");
const buyModel = require("../../models/buy");

const handler = async (req, res) => {
    try {
        const { userId } = req.query;
        const result = await buyModel.find({ userId }).populate("productId");
        if(result) res.json({ msg: "Buy History Data Fetched", result });
    } catch (err) {
        res.json({ result: err.message });
    }
}

retriveRouter.get("/buy", handler);