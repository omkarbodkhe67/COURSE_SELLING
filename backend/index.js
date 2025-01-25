require('dotenv').config();

 console.log("MONGO_URL from .env:", process.env.MONGO_URL);
const express = require('express')
const mongoose = require('mongoose')

const {userRouter} = require('./routes/user')
const {courseRouter}= require('./routes/course')
 const {adminRouter}= require('./routes/admin')
const app= express();
app.use(express.json())


app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",adminRouter);
app.use("/api/v1/course",courseRouter)

    // createUserRoutes(app);
    // createCourseRoutes(app);



async  function  main(){
await mongoose.connect("")

app.listen(3000)
 console.log("server is running on port 3000")
}
 main()