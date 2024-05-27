var mongoose = require('mongoose');

var firstschema = new mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    mobile:{
        type:Number
    },
    user_name:{
        type:String
    },
    email:{
        type:String
    },
    gender:{
        type:String
    }
});

module.exports = mongoose.model("user_reg",firstschema);