var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    like:{
        type:String
    },
    
})

module.exports = mongoose.model("user_like",userschema);