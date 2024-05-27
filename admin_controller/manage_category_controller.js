var manage_cate = require('../admin_model/add_blog_category_model');

exports.delete_data = async(req,res) => {
    var id = req.params.id;

    var data = await manage_cate.findByIdAndDelete(id);

    res.status(200).json({
        status:"data deleted"
    })
}
exports.update_data = async(req,res) => {
    var id = req.params.id;
    
    var data = await manage_cate.findByIdAndUpdate(id,req.body);
    
    res.status(200).json({
        status:"data update"
    })
    
}
