var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    title:{
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
module.exports=mongoose.model("add_blogger",userschema);