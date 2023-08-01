const Brand = require('./Model')
const { connect } = require('mongoose')
require('dotenv').config()

const getAllBrands = async(req,res) =>{
    

    try {
        await connect(process.env.MONGO_URI)
       const getAllBrands = await Brand.find()
             res.json({
           brand : allBrands
        })
    } 


        
    
    catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}

const getBrandByID = async(req,res) =>{
    

    try {
        
    } 
    
    catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}

const createBrand= async(req,res) =>{
   const {BrandName , BrandImage} = req.body

   if (!BrandName || !BrandImage) {
    res.status(403).json({
        message: "Missing Required Field"
    })
}
else{
    try {
        await connect(process.env.MONGO_URI)
        const checkExisting = await Brand.exists({ BrandName })

            if (checkExisting) {
                res.status(400).json({
                    message: "Brand Already Exists"
                })
            }
else{
    await Brand.create({BrandName, BrandImage})
    const getAllBrands = await Brand.find()


        res.json({
            message : "DB Connected" ,
            brand : allBrands
        })
    } 
}

        
    
    catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}
}



const updateBrand= async(req,res) =>{
    

    try {
        
    } 
    
    catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}

const deleteBrand = async(req,res) =>{
    

    try {
        
    } 
    
    catch (error) {
        res.status(400).json({
            message : error.message
        })
    }
}
module.exports = {getAllBrands, getBrandByID, createBrand, updateBrand, deleteBrand}