var view_blogger = require('../blogger_model/blogger_add_model');

exports.get_data = async (req,res) =>{
    var data =await view_blogger.find();

    res.status(200).json({
        status:"data select",
        data
    })
}