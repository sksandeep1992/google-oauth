//we create a modules folder it store all the work that we do on mongoose
//use the required keyword to get access to the mongoose
const mongoose = require('mongoose');
//we use to access mongoose property Schema
//Schema  describe property of collection we create
const { Schema } = mongoose;
//we create Schema: userSchema
const userSchema = new Schema ({
  googleId: String

});
//mongoose.model comand we tell we create a collection  users
//and it use property from userSchema
mongoose.model('users', userSchema);
