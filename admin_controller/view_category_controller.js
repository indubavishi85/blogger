var view_cate = require('../admin_model/add_blog_category_model');

exports.get_data = async (req,res) =>{
    var data =await view_cate.find();

    res.status(200).json({
        status:"data select",
        data
    })
}