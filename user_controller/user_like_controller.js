var user_like = require('../user_model/user_like_model');

exports.insert = async (req,res) =>{
    var data =await user_like.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}

exports.get_data = async (req,res) =>{
    var data =await user_like.find();

    res.status(200).json({
        status:"data select",
        data
    })
}