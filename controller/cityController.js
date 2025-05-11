import cityModel from "../model/city.model.js";

const getAllcity = async (req, res) => {
    try {
        const citys = await cityModel.find();
        if (citys.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ citys })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "city data not found due to " + error.message
        })
    }
}


const getcitybyCountry = async (req, res) => {
    try {

        const id = req.params.Id
        const citys = await cityModel.find({CountryCode:id});
        if (citys.length === 0) {
            return res.status(500).send({
                success: false,
                message: error.message
            })
        }
        else {
            res.json({ citys })
        }
    }
    catch (error) {
        return res.status(400).send({
            success: false,
            message: "city data not found due to " + error.message
        })
    }
}

export { getAllcity,getcitybyCountry };