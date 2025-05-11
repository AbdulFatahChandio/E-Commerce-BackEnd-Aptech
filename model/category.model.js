import mongoose from 'mongoose'

const categoryModel=mongoose.Schema(
    {

productLine:String,
textDescription:String,
htmlDescription:String,
image:String
    },
    {
        timestamps:true
    }
)

export default mongoose.model('category',categoryModel)