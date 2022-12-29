const retriveRouter = require("../../routes/retriveRouter");
const cartModel = require("../../models/cart");

const handler = async (req, res) => {
    try {
        const { userId } = req.query;
        const result = await cartModel.find({ userId }).populate("productId");
        if(result) res.json({ msg: "Cart Data Fetched", result });
    } catch (err) {
        res.json({ result: err.message });
    }
}

retriveRouter.get("/cart", handler);