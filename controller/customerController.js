import customerModel from "../model/customer.model.js";

const getAllCustomer = async (req, res) => {
    try {
        const customers = await customerModel.find();
        if (customers.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ customers })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "customer data not found due to " + error.message
        })
    }
}


const getCustomerbyID = async (req, res) => {
    try {

        const id = req.params.Id
        const customers = await customerModel.find({customerNumber:id});
        if (customers.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ customers })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "customer data not found due to " + error.message
        })
    }
}

const addCustomer = async (req, res) => {
    try {
        const {name,email,pwd,country,city,phone,address}=req.body;

        var totalCustomer=0    
        totalCustomer=await customerModel.countDocuments()
        var cid=totalCustomer+1        
        const customer = new customerModel(
            {
                customerNumber:cid,
                customerName:name,
                contactLastName:name,
                contactFirstName:name,
                phone:phone,
                addressLine1:address,
                addressLine2:address,
                city:city,
                state:country,
                postalCode:123,
                country:country,
                salesRepEmployeeNumber:1234,
                creditLimit:1234,
                email:email,
                file:"1.jpg",
                pwd:pwd,
                type:"M"
            }
        )
        
        customer.save().then(()=>{ 
            res.status(200).send({
                success: true,
                message: "Your registration has been created successfully with id="+cid
            })
        }
        ).catch((err)=>{ 
            res.status(500).send({
                success: false,
                message: error.message
            })
        }
        )
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "customer data not found due to " + error.message
        })
    }
}


const authLogin = async (req, res) => {
    try {

        const {email,pwd}=req.body;

        const customers = await customerModel.find(
        {
            $and:[
                {email:email},
                {pwd:pwd}
            ]
        }           
        );

        if (customers.length === 0) {
            return res.status(500).send({
                
                success: false,
                message: "Invalid login id/pwd"
            })
        }
        else {
            res.status(200).send({
                success: true,
                noofrecord: customers.length,
                customers: customers,
                 message: "Valid Login"
            })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
             message: "Invalid login id/pwd"
        })
    }
}


const updateCustomer = async (req, res) => {
    try {
        const {name,email,country,city,phone,address,cid}=req.body;       
        var customerdoc = {
                customerName:name,
                contactLastName:name,
                contactFirstName:name,
                phone:phone,
                addressLine1:address,
                addressLine2:address,
                city:city,
                state:country,
                postalCode:123,
                country:country,
                salesRepEmployeeNumber:1234,
                creditLimit:1234,
                email:email,
                file:"1.jpg",
                type:"M"
            }        
        const customer = new customerModel(customerdoc)
        
        customer.updateOne({customerNumber:cid},{
            $set:customerdoc
        },
        {upsert:true}
        )      
        .then(()=>{ 
            res.status(200).send({
                success: true,
                message: "Your Profile has been updated"
            })
        }
        ).catch((err)=>{ 
            res.status(500).send({
                success: false,
                message: error.message
            })
        }
        )
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "customer data not found due to " + error.message
        })
    }
}

export { getAllCustomer,getCustomerbyID,addCustomer,authLogin,updateCustomer };