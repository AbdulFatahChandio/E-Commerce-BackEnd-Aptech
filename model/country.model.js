import mongoose from 'mongoose'

const countryModel=mongoose.Schema(
    {
        Code : String,
        Name: String,       
        Continent: String,
        Region: String,
        SurfaceArea: String,
        IndepYear: String,
        Population: Number,
        LifeExpectancy: String,
        GNP: String,
        GNPOld: String,
        LocalName: String,
        GovernmentForm: String,
        HeadOfState: String,
        Capital: String,
        Code2: String       
    },
    {
        timestamps:true
    }
)

export default mongoose.model('country',countryModel)