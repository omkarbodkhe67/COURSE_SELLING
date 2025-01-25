 const jwt = require("jsonwebtoken")
 const{JWT_USER_PASSWORD} =("../routes/config")

function userMiddleware(req,res,next){
     const token = req.headers.token;
     const decoded = jwt.verify(token,JWT_USER_PASSWORD)

      if(decoded){
         req.userId = decoded.id;
         next()
      } else {
         res.semd(403).json({
             message : "You are not signed in"
         })
      }


}
module.exports ={
    userMiddleware:userMiddleware

}