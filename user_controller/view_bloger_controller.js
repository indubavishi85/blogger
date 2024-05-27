var view_bloger = require('../blogger_model/blogger_add_model');

exports.get_data = async (req,res) =>{
    var data =await view_bloger.find();

    res.status(200).json({
        status:"data select",
        data
    })
}