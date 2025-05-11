import express from 'express'
import {getAllProduct,getProductbyID,getProductbyCat,getProductbyKey,getCatwiseProduct,getCartProduct} from '../controller/productController.js'
import {getAllCustomer,getCustomerbyID,addCustomer,authLogin,updateCustomer} from '../controller/customerController.js'
import apiKeyMiddleware from '../middleware/apiKeyMiddleware.js'
import {getAllcountry,getcountrybyID} from '../controller/countryController.js'
import { getAllcity,getcitybyCountry } from '../controller/cityController.js'

const router=express.Router();

router.get('/getAllProduct/:page',apiKeyMiddleware,getAllProduct)

router.get('/getProductbyID/:Id',getProductbyID)

router.get('/getProductbyCat/:cat/:page/:sort/:size',getProductbyCat)

router.get('/getProductbyKey/:key',getProductbyKey)

router.get('/getAllCustomer',getAllCustomer)

router.get('/getCustomerbyID/:Id',getCustomerbyID)

router.post('/authLogin',authLogin)

router.get('/getAllcountry',getAllcountry)

router.get('/getcountrybyID/:Id',getcountrybyID)


router.get('/getAllcity',getAllcity)

router.get('/getcitybyCountry/:Id',getcitybyCountry)

router.post('/addCustomer',addCustomer)

router.post('/updateCustomer',updateCustomer)

router.get('/getCatwiseProduct',getCatwiseProduct)

router.get('/getCartProduct',getCartProduct)

export default router