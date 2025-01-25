const {Router} = require('express')
const adminRouter = Router()
const {adminModel} = require('../db')
const jwt = require("jsonwebtoken")

const JWT_ADMIN_PASSWORD = "admin123 "



 adminRouter.post('/signup', async function(req,res){
    const {email,password,firstName,lastName}=req.body; //TODO :adding zod validation
    //Todo:hash the password so plaintext pw is not stoted in the db
   //hash the password so plaintext 

   //todo: put inside try catch block

   await  adminModel.create({
       email :email,
       password : password,
       firstName :firstName,
       lastName:lastName

   })

   res.json({
       message:"Signup succeeded"
   })
 })

 adminRouter.post('/signin', async function(req,res){
    const {email,password} =req.body;
    //Todo: ideally password should be hashed and hence you compare the user provided password and the database password

      const admin =   await  adminModel.findOne({
         email:email,
         password:password
      });


       if(admin){
       const token =  jwt.sign({

             id:admin._id
         },JWT_ADMIN_PASSWORD);


          res.json({
             token:token
          }) 

       } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})

adminRouter.post('/',function(rwq,res){
    res.json({
         message:"signup endpoint"
    })
})

adminRouter.put('/',function(rwq,res){
    res.json({
         message:"signup endpoint"
    })
})

adminRouter.get('/bulk',function(rwq,res){
    res.json({
         message:"signup endpoint"
    })
})

module.exports={
     adminRouter:adminRouter }