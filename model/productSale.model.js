import mongoose from 'mongoose'

const productSaleModel=mongoose.Schema(
    {
productName:String,
productLine:String,
productScale:String,
productVendor:String,
productDescription:String,
quantity:Number,
buyPrice:Number,
MSRP:Number,
image:String,
productID:Number,
saleID:Number
    },
    {
        timestamps:true
    }
)

export default mongoose.model('productsale',productSaleModel)