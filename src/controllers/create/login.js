const createRoute = require("../../routes/createRouter");
const registerUser = require("../../models/register");
const userToken = require("../../models/token");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const handler = async (req, res) => {
    try {
        const { email, password } = req.body.loginData;

        if (email === "" || password === "")
            res.json({ err: "Both fields are required", icon: "error" });
        else {
            const userExist = await registerUser.findOne({ email });

            if (userExist && userExist.email === email && userExist.password === password) {
                const { name, email, password, _id } = userExist;
                const token = jwt.sign({ name, email, password, date: Date.now }, SECRET_KEY);
                const tokenExist = await userToken.findOne({ userId: _id });
                if (!tokenExist) {
                    const user_token = new userToken({
                        tokens: { token: token },
                        userId: _id
                    });
                    await user_token.save();
                    res.json({ msg: "Token Created", icon: "success", token, id: _id });
                } else {
                    tokenExist.tokens = tokenExist.tokens.concat({
                        token: token
                    });
                    await tokenExist.save();
                    res.json({ msg: "Token Inserted", icon: "success", token, id: _id });
                }
            }
            else
                res.json({ err: "Check your credentials or Register first", icon: "error" });
        }
    } catch (err) {
        res.json({ msg: err });
    }
}

createRoute.post("/login", handler);