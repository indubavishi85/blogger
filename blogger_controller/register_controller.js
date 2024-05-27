var reg_blogger = require('../blogger_model/register_model');


exports.insert = async (req,res) =>{
    var data =await reg_blogger.create(req.body);
    
    res.status(200).json({
        status:"data insert",
        data
    })
}

exports.get_data = async (req,res) =>{
    var data =await reg_blogger.find();
    
    res.status(200).json({
        status:"data select",
        data
    })
}
