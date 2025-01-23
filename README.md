-create new node js project
-add express, jsonwebtoken, mongoose
-create index.js
- add route for user login , signup, purchase a course , sees the puechase course
-add routes for admin login , signup , cretae , delete a course , add course
-add middleware for user and admin auth
-add database , use dotenv to store the db conncetion string
 -define schema for user , admin , course, purchase
 -complete the routes for user login signup purchase a soure see course



  Schema
    Users:-
     id => ObjectId
     email = string
     firstName string
     last Nmae= strung

     Admin :-
       id = ObjectId
       email => string
       passwords string
       firstname string
       lastname string


    course
     id=>ObjectId
     title string
     description string
     price number
     imageUrl string
     creatorId oBject Id


     Purchases
      id=ObjectId
      CourseId =ObjectId
      userId ObjectId