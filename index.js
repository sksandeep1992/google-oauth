// use the required keyword to get access to the Express library in this course.
const express = require('express');

//a new application that represents a running express app through this course
// we're only going to using
 const app = express();
 //We're going create a route handler and associated with a given route.
app.get('/', (req,res) =>
{
  res.send({ hi:'there'});
});

//create dynamic Port Binding
const PORT = process.env.PORT || 5000 ;
app.listen(PORT);
//This instructs express app to tell node that
//it wants to listen for incoming traffic on port 5000.
//app.listen(5000);
