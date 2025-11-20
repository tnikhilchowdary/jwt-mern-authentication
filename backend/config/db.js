import mongoose from "mongoose";

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGO DB Connected Succesfully");
    }
    catch(error){
        console.error("Error in Connecting MongoDB", error);
    }
}

export default connectDb;