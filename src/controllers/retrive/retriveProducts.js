const retriveRouter = require("../../routes/retriveRouter")
const retriveProductsModel = require("../../models/retriveProducts")

const handler = async (req, res) => {
    try{
        const result = await retriveProductsModel.find();
        if(result) res.json({ msg: "Data Fetched", result });
    } catch(err){
        res.json({ result: err });
    }
}

retriveRouter.get("/products", handler);