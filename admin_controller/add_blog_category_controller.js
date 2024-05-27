var add_cate = require('../admin_model/add_blog_category_model');


exports.insert = async (req,res) =>{
    req.body.image=req.file.originalname;
    var data =await add_cate.create(req.body);
    
    res.status(200).json({
        status:"data insert",
        data
    })
}