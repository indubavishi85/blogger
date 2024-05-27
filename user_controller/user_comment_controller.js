var user_comment = require('../user_model/user_comment_model');

exports.insert = async (req,res) =>{
    var data =await user_comment.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}

exports.get_data = async (req,res) =>{
    var data =await user_comment.find();

    res.status(200).json({
        status:"data select",
        data
    })
}