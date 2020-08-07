//we create services folder for work on helper modules and
//business logic

const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys.js');
//Now the passport Google 0.20 module actually exports
//a couple of different properties and we only care
//about one very particular property which is the strategy property.
//So we're going to add on Dot strategy and to the end like some OK.
const  GoogleStrategy = require('passport-google-oauth20').Strategy;

//we create a modle class User and use monggose collection users
const User = mongoose.model('users');


// we're going to define a function called serialise user serialise user is going to be automatically called
// by passport with our user model that we just fetched during this step right here.
// We're going to use that user model to generate our identifying piece of user information and after we
// do that we'll pass that identifying piece of information back to passport and then passport will automatically
// stuff that little token into the user's cookie for us.

passport.serializeUser((user, done) => {
  done(null, user.id);
});
//it turn user id into user
passport.deserializeUser((id, done) => {
  User.findById(id)
  .then( user => {
    done(null, user);
  });
});
//the function call new Google strategy creates a new instance
//of the Google passport strategy. in this function we provide to arguments
//one request client id,client secret,and callback path
//two responde access accessToken
 passport.use(new GoogleStrategy({
   clientID: keys.googleClientID,
   clientSecret: keys.googleClienrSecret ,
   callbackURL: '/auth/google/callback',
   proxy: true
 },
 //for check the google providing information
  ( accessToken, refreshToken, profile, done) => {
//we use findOne function to check if googleId is equal to
//profileid. than we use java script Promicess function in "than
//contain existingUser after we check if there is a existingUser
//same as profie id we say  we alredy have a user record
//else we create a new record
    User.findOne({ googleId: profile.id })
    .then( existingUser => {
      if(existingUser){
         new User({ googleId: profile.id });
        //we alredy have a user record
        //we use done function to tell we have finihed.
        //than pronide NULL if there no error
        //and reture existingUser
        done(null, existingUser);
      } else {
        //we don't have a record. create new record
        new User({ googleId: profile.id })
        .save()
        .then(user => done(null, user));
//user is the mongoDB data base colllection name
      }
    });
     // create model instance taht store google ID
     //ofr store id we use function sane();
 //new User({ googleId: profile.id }).save();
   }
)
);
