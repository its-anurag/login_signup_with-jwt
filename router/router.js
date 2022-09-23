const express=require('express')
const{authenticateToken}=require('../Auth/index')
const { InserData, Delete, updatedatabyid,login } = require('../InserData/index')
const app=express()
const router=express.Router()

router.post('/signUp',InserData)
router.post('/delete',Delete)
router.put('/updated/:id',authenticateToken,updatedatabyid)
router.post('/login',login)


module.exports=router;