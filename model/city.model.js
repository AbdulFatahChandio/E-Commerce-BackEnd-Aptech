import mongoose from 'mongoose'

const cityModel=mongoose.Schema(
    {
       
ID:String,
Name:String,
CountryCode:String,
District:String,
Population:String
    },
    {
        timestamps:true
    }
)

export default mongoose.model('city',cityModel)