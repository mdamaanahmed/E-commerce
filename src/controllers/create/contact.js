const createRouter = require("../../routes/createRouter");
const contactModel = require("../../models/contact");
const nodemailer = require("nodemailer");
const APP_PASSWORD = process.env.APP_PASSWORD;
const EMAIL = process.env.EMAIL;

const handler = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, msg } = req.body.data;

        const contactData = await new contactModel({
            userId: req.body.userId,
            firstname,
            lastname,
            email,
            phone,
            msg,
        }).save();

        if (contactData) {
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: EMAIL,
                    pass: APP_PASSWORD,
                }
            });
            
            await transporter.sendMail({
                from: EMAIL,
                to: email,
                subject: "Contact Successfully",
                text: "Our team contact you soon.",
                // html: "<b>Hello world?</b>",
            });
            
            res.status(200).json({ result: "Message send successfully on your Email", code: true })
        }
    } catch (err) {
        res.json({ result: err.message });
    }
}

createRouter.post("/contact", handler);