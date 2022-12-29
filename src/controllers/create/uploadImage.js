const createRouter = require("../../routes/createRouter");
const registerUser = require("../../models/register");
const path = require("path");
const { readdir } = require('fs/promises');
fs = require('fs');

const handler = async (req, res) => {
    try {
        const { userId, old_profile_image } = req.body;
        const { file } = req.files;
        const image = file.name;

        // delete existing profile image
        (async function deleteImage() {
            const url = path.resolve("./assets/profileImages/");
            const files = await readdir(`${url}`);
            for (const file of files) {
                if (file === old_profile_image) {
                    fs.unlinkSync(`assets/profileImages/${old_profile_image}`);
                }
            }
        }());

        // upload image
        const extension = path.extname(`${image}`);
        const allowedExt = /png|jpg|jpeg|webp/;
        if (!allowedExt.test(extension)) throw "unsupported file type";
        const md5 = file.md5 + new Date().getTime();
        const encrypt_image_name = md5 + extension;
        file.mv("assets/profileImages/" + encrypt_image_name);

        const profileAdded = await registerUser.findOneAndUpdate(
            {
                _id: userId,
            }, 
            {
                profile: encrypt_image_name
            });

        res.status(201).json({ result: "Image uploaded successfully", old_profile_image: encrypt_image_name, code: true })

    } catch (err) {
        res.json({ result: err.message });
    }
}

createRouter.post("/upload-image", handler);