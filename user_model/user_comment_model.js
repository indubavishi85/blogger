var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    comment:{
        type:String
    },
    
})

module.exports = mongoose.model("user_comment",userschema);