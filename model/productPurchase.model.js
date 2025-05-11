import mongoose from 'mongoose'

const productPurchaseModel=mongoose.Schema(
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
purchaseID:Number
    },
    {
        timestamps:true
    }
)

export default mongoose.model('productpurchase',productPurchaseModel)