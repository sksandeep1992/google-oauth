//keys.js- figure out what set of credantial return
//NODE_ENV is a heroku function that tall us
//where are we nad return kays accordint to it.
if(process.env.NODE_ENV === 'production') {
  //we are in production - return the prod set key
  //we export prod.js so we can use keys in
  //prod according to requirement
    module.exports = require('./prod');
} else {
  //we are in deveploment- return dev set kay
//we export dev.js so we can use keys in
//dev according to requirement
  module.exports = require('./dev');
}
