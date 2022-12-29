const createRoute = require("../../routes/createRouter");
const registerUser = require("../../models/register");

const handler = async (req, res) => {
    try {
        const { name, email, password } = req.body.registerData;

        if (email === "" || password === "" || name === "")
            res.json({ msg: "All fields are required", icon: "error" });
        else if (password.length < 8)
            res.json({ msg: "Password must be 8 charecters longer", icon: "warning" });
        else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))
            res.json({ msg: "Please type a valid email address", icon: "warning" });
        else{
            let emailExist = await registerUser.findOne({ email });
            if (!emailExist) {
                const register = new registerUser({
                    name,
                    email,
                    password,
                });
                await register.save()
                res.json({ msg: "Registration Successfull", icon: "success" });
            }
            else
                res.json({ msg: "Email already exist", icon: "error" });
        }
    } catch (err) {
        res.json({ msg: "Something wents wrong", icon: "error" })
    }

}

createRoute.post("/register", handler);