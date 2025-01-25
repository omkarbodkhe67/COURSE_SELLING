  const {Router} = require('express')
  const {userModel} = require("../db")
  const jwt = require("jsonwebtoken")

  const JWT_USER_PASSWORD= "omkar1905"
   const userRouter = Router() ;


userRouter.post('/signup', async function(req,res){
     const {email,password,firstName,lastName}=req.body; //TODO :adding zod validation
     //Todo:hash the password so plaintext pw is not stoted in the db
    //hash the password so plaintext 

    //todo: put inside try catch block

    await  userModel.create({
        email :email,
        password : password,
        firstName :firstName,
        lastName:lastName

    })

    res.json({
        message:"signup succeeded"
    })
})

userRouter.post('/signin', async function(req,res){
     
      const {email,password} =req.body;
    //Todo: ideally password should be hashed and hence you compare the user provided password and the database password

      const user =   await  userModel.findOne({
         email:email,
         password:password
      });


       if(user){
       const token =  jwt.sign({

             id:user._id
         },JWT_USER_PASSWORD);


          res.json({
             token:token
          }) 

       } else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })

       }
  
})

userRouter.get('/purchases',function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

 module.exports ={
    userRouter:userRouter
 }