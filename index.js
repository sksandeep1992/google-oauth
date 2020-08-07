// use the required keyword to get access to the Express library in this course.
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
//we dont assign anything so we directly require it
require('./services/passport');
//it use to connect mongoose data base by mongoURI
mongoose.connect(keys.mongoURI , { useNewUrlParser: true ,useUnifiedTopology: true});
//a new application that represents a running express app through this course
// we're only going to using
 const app = express();
//we create cookies by using app.use function
app.use(
  //it exttract cookies data
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey]
  })
);
//we use passport to menage cookies and pull user id out of cookies
app.use(passport.initialize());
app.use(passport.session());

// we require authRoutes for route handeler and call app function.
require('./routes/authRoutes')(app);
 //create dynamic Port Binding
 const PORT = process.env.PORT || 5000;

 app.listen(PORT);
 //This instructs express app to tell node that
 //it wants to listen for incoming traffic on port 5000.
 //app.listen(5000);
