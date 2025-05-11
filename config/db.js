import mongoose  from "mongoose";

const connectDB=async(req,res)=>
{
    try
    {
    await mongoose.connect('mongodb://localhost:27017/AptechDB2').then(
        ()=>
        {
            console.log("database connected")
        }
    ).catch(
        (err)=>
        {
            console.log("database not connected due to"+err)
        }
    )
    

    }
    catch(error)
    {
       console.log("error with db"+error)
       process.exit(1)
    }
}

export default connectDB