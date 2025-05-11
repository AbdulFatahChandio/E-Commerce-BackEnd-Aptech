import productModel from "../model/product.model.js";

const getAllProduct = async (req, res) => {
    try {
        const pagesize=10
        const page=req.params.page
        const start=(page-1)*pagesize

        const products = await productModel.find().skip(start).limit(pagesize)
        if (products.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ products })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "product data not found due to " + error.message
        })
    }
}


const getProductbyID = async (req, res) => {
    try {
        const id = req.params.Id
        const products = await productModel.find({ productID: id });
        if (products.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ products })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "product data not found due to " + error.message
        })
    }

}


const getProductbyCat = async (req, res) => {
    try {
        const page = req.params.page
        const cat = req.params.cat
        const sort = req.params.sort

        const noofrecord = await productModel.find(
            {
                productLine:{$regex:new RegExp(cat,'i')} 
            }
        ).countDocuments()
        
        const pagesize=req.params.size
        const noofpages=noofrecord/pagesize
        const offset=(page-1)*pagesize

        if (sort=="buyPrice")
        {
        const products = await productModel.find(
            {
                productLine:{$regex:new RegExp(cat,'i')} 
            }
        ).skip(offset).limit(pagesize).sort({buyPrice:-1})

        if (products.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.status(200).send({
                success: true,
                noofpages:noofpages,
                noofrecord:noofrecord,
                products:products
            })
        }
    }
    else
    {
        const products = await productModel.find(
            {
                productLine:{$regex:new RegExp(cat,'i')} 
            }
        ).skip(offset).limit(pagesize).sort({productName:1})

        if (products.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.status(200).send({
                success: true,
                noofpages:noofpages,
                noofrecord:noofrecord,
                products:products
            })
        }
    }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "product data not found due to " + error.message
        })
    }

}


const getProductbyKey = async (req, res) => {
    try {
        const key = req.params.key
        
        const products = await productModel.find({$or:
            [
            {productLine:{$regex:new RegExp(key,'i')} },
            {productName:{$regex:new RegExp(key,'i')} },
            {productVendor:{$regex:new RegExp(key,'i')} },        
            ]
        }
        );
        
        if (products.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ products })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "product data not found due to " + error.message
        })
    }

}


const getCatwiseProduct = async (req, res) => {
    try {       
        const products = await  await productModel.aggregate( 
            [
            {
            $group: {
            _id: "$productLine",
            COUNT: { $sum: 1 }
            }
            }
            ] )
        if (products.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ products })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "product data not found due to " + error.message
        })
    }
}


const getCartProduct = async (req, res) => {
    try {
      
        const products = await productModel.find()
        
        if (products.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ products })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "product data not found due to " + error.message
        })
    }
}

export { getAllProduct, getProductbyID, getProductbyCat,getProductbyKey,getCatwiseProduct,getCartProduct };