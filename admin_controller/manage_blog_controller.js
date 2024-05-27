var manage_blog = require('../admin_model/add_blog_model');

exports.delete_data = async(req,res) => {
    var id = req.params.id;

    var data = await manage_blog.findByIdAndDelete(id);

    res.status(200).json({
        status:"data deleted"
    })
}
exports.update_data = async(req,res) => {
    var id = req.params.id;
    // console.log('form-data',req.params.id);
    var data = await manage_blog.findByIdAndUpdate(id,req.body);
    // console.log(data);
    
    res.status(200).json({
        status:"data update"
    })
    
}
