import countryModel from "../model/country.model.js";

const getAllcountry = async (req, res) => {
    try {
        const countrys = await countryModel.find();
        if (countrys.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ countrys })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "country data not found due to " + error.message
        })
    }
}


const getcountrybyID = async (req, res) => {
    try {

        const id = req.params.Id
        const countrys = await countryModel.find({Code:id});
        if (countrys.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ countrys })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "country data not found due to " + error.message
        })
    }
}

export { getAllcountry,getcountrybyID };