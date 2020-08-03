// use the required keyword to get access to the Express library in this course.
const express = require('express');
const passport = require('passport');
const keys = require('./config/keys.js');
//Now the passport Google 0.20 module actually exports
//a couple of different properties and we only care
//about one very particular property which is the strategy property.
//So we're going to add on Dot strategy and to the end like some OK.
const  GoogleStrategy = require('passport-google-oauth20').Strategy;
//a new application that represents a running express app through this course
// we're only going to using
 const app = express();
//the function call new Google strategy creates a new instance
//of the Google passport strategy. in this function we provide to arguments
//one request client id,client secret,and callback path
//two responde access accessToken
 passport.use(new GoogleStrategy({
   clientID: keys.googleClientID,
   clientSecret: keys.googleClienrSecret ,
   callbackURL: '/auth/google/callback'
 },
   accessToken => {
     console.log(accessToken);
   }
)
);
//we're going to add a single route handler.
app.get(
  '/auth/google',
   passport.authenticate('google', {
     scope: ['profile', 'email']
   })
);
//create dynamic Port Binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);
//This instructs express app to tell node that
//it wants to listen for incoming traffic on port 5000.
//app.listen(5000);
