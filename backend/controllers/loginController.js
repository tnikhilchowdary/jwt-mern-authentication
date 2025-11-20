import User from "../models/users.js";

export const Login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"No user Found"});
        }

        if(user.password !== password){
            return res.status(400).json({message:"Password is Incorrect!"});
        }

        return res.status(200).json({
            message:"Login Succesfully",
            user:user
        })
    }
    catch(error){
        console.errro("Error in Login");
        return res.status(501).json({message:"Error in Login"});
    }
}