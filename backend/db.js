const mongoose =require('mongoose');
const {Schema} =require('mongoose')
console.log("connected to");
mongoose.connect("mongodb+srv://fooddaddy:yaQXwxWpFUd5dVAM@cluster0.e6jkm.mongodb.net/coursera-app")

const ObjectId = Schema.Types.ObjectId
const userSchema =  new Schema({
      email : {type: String ,unique:true} ,
      password : String,
      firstName : String,
      lastName : String
    

});


const adminSchema = new Schema({
    email : {type: String ,unique:true} ,
      password : String,
      firstName : String,
      lastName : String

});

const courseSchema = new  Schema({
     title : String,
     description: String,
     price : Number,
     imageUrl : String,
     creatorId: ObjectId

});

const purchaseSchema =  new Schema({
     userId : ObjectId,
     courseId : ObjectId

});


const userModel =mongoose.model("user",userSchema);
const adminModel =mongoose.model("admin",userSchema);
const courseModel =mongoose.model("course",userSchema);
const purchaseModel =mongoose.model("purchase",userSchema);

module.exports={ 
     userModel,
     adminModel,
     courseModel,
     purchaseModel
}