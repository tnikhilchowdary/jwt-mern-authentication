import User from "../models/users.js";
import bcrypt from "bcrypt";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "No user Found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Password is Incorrect!" });
        }

        return res.status(200).json({
            message: "Login Successfully",
            user: user
        });

    } catch (error) {
        console.error("Error in Login", error);
        return res.status(500).json({ message: "Error in Login" });
    }
};
