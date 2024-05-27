var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    tilte:{
        type:String
    },
    discription:{
        type:String
    },
    image:{
        type:String
    },
    date:{
        type:String
    },
    comment:{
        type:String
    },
})
module.exports=mongoose.model("add_blog",userschema);