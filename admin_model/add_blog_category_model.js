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
    category:{
        type:String
    },
})
module.exports=mongoose.model("category_blog",userschema);