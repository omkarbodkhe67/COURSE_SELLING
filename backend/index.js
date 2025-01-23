const express = require('express')
const mongoose = require('mongoose')

const {userRouter} = require('./routes/user')
const {courseRouter}= require('./routes/course')
 const {adminRouter}= require('./routes/admin')
const app= express();


app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",userRouter);
app.use("/api/v1/course",courseRouter)

    // createUserRoutes(app);
    // createCourseRoutes(app);



async  function  main(){
await mongoose.connect("mongodb+srv://fooddaddy:yaQXwxWpFUd5dVAM@cluster0.e6jkm.mongodb.net/coursera-app")

app.listen(3000)
 console.log("server is running on port 3000")
}
 main()