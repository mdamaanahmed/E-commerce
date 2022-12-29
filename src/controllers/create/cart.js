const createRouter = require("../../routes/createRouter");
const cartModel = require("../../models/cart");

const handler = async (req, res) => {
    try {
        const { userId, qty, product: { _id, price } } = req.body;
        const itemExist = await cartModel.findOne({
            userId,
            productId: _id,
        });

        if (itemExist && itemExist.qty !== qty)
            await itemExist.updateOne({
                qty: qty
            })

        else if (!itemExist)
            await new cartModel({
                userId,
                qty,
                productId: _id,
                price
            }).save();

        res.status(201).json({result: "Item Add Into Cart", code: true})

    } catch (err) {
        res.json({ result: err.message });
    }
}

createRouter.post("/cart", handler);