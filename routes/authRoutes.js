//we create  routes foldr because we have multiple route
//handler.

const passport = require('passport');
//we exports app here because app function ont work without
//export .it a function of index.js
module.exports = (app) => {

//we're going to add a single route handler.
app.get(
  '/auth/google',
   passport.authenticate('google', {
     scope: ['profile', 'email']
   })
);

//we're going to create a route handeler for callback
app.get('/auth/google/callback',
passport.authenticate('google')
);
//create a route for logout
app.get('/api/logout', (req,res) => {
  req.logout();
  res.send(req.user);
});

app.get('/api/current_user' , (req,res) => {
  res.send(req.user);
});
};
