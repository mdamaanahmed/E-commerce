const createRouter = require("../../routes/createRouter");
const cartModel = require("../../models/cart");
const buyModel = require("../../models/buy");

const handler = async (req, res) => {
    try {
        const { userId } = req.body;
        if (req.body?.product) {
            await new buyModel({
                userId,
                productId: req.body?.product?._id,
                qty: req.body?.qty,
                price: req.body?.product?.price
            }).save();

            res.status(201).json({ result: "Item Add Into buy", code: true })
        } else {
            const fullUserCartData = await cartModel.find({
                userId
            });

            if (fullUserCartData) {
                const fullUserBuyData = await buyModel.insertMany(fullUserCartData);
                if (fullUserBuyData) {
                    await cartModel.deleteMany({
                        userId
                    })
                }
            }

            res.status(201).json({ result: "Item Add Into buy", code: true });
        }
    } catch (err) {
        res.json({ result: err.message });
    }
}

createRouter.post("/buy", handler);