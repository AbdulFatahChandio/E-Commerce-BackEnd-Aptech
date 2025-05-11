import mongoose from 'mongoose'

const customerModel=mongoose.Schema(
    {
        customerNumber:Number,
        customerName:String,
        contactLastName:String,
        contactFirstName:String,
        phone:String,
        addressLine1:String,
        addressLine2:String,
        city:String,
        state:String,
        postalCode:Number,
        country:String,
        salesRepEmployeeNumber:Number,
        creditLimit:Number,
        email:String,
        file:String,
        pwd:String,
        type:String
    },
    {
        timestamps:true
    }
)

export default mongoose.model('customer',customerModel)