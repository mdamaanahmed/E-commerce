const deleteRouter = require("../../routes/deleteRouter");
const cartModel = require("../../models/cart");

const handler = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const result = await cartModel.deleteOne({
            userId,
            productId
        });
        if (result) res.json({ msg: "Cart Data Deleted", result });
    } catch (err) {
        res.json({ result: err.message });
    }
}

deleteRouter.post("/cart", handler);