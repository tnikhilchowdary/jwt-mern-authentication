import User from "../models/users.js";

export const getUsers = async (req, res) => {
    try{
        const user = await User.find({});
        return res.status(200).json({message:"User Fetched Succesfully",
            user:user
        });
    }
    catch(error){
        console.error("Error in Fetching User Data");
        return res.status(500).json({message:"Error in fetching", error});
    }
}


export const addUsers = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = new User({name, email, password});
        await user.save();

        return res.status(200).json({
            message:"User Added Succesfully",
            user:user
        })
    }
    catch(error){
        console.error("Error in Adding Data", error);
        return res.status(500).json({
            message:"Error In adding user"
        });
    }
}

