var single_view = require('../admin_model/add_blog_model');


exports.view_data = async (req,res) =>{
    
    var id = req.params.id;

    var data =await single_view.findById(id,req.body);
    
    res.status(200).json({
        status:"data view",
        data
    })
}

