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


