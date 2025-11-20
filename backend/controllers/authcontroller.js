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

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User Not Found" });
        }

        return res.status(200).json({
            message: "User Updated Successfully",
            user: updatedUser
        });
    } 
    catch (error) {
        console.error("Error In Updating Data", error);
        return res.status(501).json({
            message: "Error in Updating Data"
        });
    }
};


export const deleteUser = async (req, res) => {
     try{
        const {id} = req.params;
        const deleteUser = await User.findByIdAndDelete(id);
        if(!deleteUser){
            console.log("User Not Found");
        }

        return res.status(201).json({
            message:"Succesfully Deleted",
            deleteUser: deleteUser
        })
     }
     catch(error){
        console.error("Error in Deleting", error);
        return res.status(501).json({message:"Error in Deleting", error});
     }
}

