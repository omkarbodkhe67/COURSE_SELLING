const {Router} = require('express')
const adminRouter = Router()
const {adminModel, courseModel} = require('../db')
const jwt = require("jsonwebtoken")

  const {JWT_ADMIN_PASSWORD} = require("../routes/config")
const { adminMiddleware } = require('../middleware/admin')




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

adminRouter.post('/course',adminMiddleware,  async function(req,res){
    const adminId = req.userId;

    const {title,description,imageUrl,price }= req.body;

   const course =  await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId :adminId
     })


    res.json({
         message:"Course Created",
         courseId: course._id
    })
})

adminRouter.put('/course', adminMiddleware, async function(req,res){
     const adminId = req.userId;

     const {title,description,imageUrl,price,courseId}= req.body;

      const course = await courseModel.updateOne({
        _id: courseId,
        creatorId :adminId 

      },{
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price
       
      })

      
    res.json({
         message:"Course updated",
         courseId:course._id
    })
})

adminRouter.get('/course/bulk',adminMiddleware, async function(req,res){
 const adminId = req.userId
     const courses = await courseModel.find({
        _id: courseId,
        creatorId :adminId 

      })
    res.json({
         message:"Course Updated",
         courses
    })
})

module.exports={
     adminRouter:adminRouter }