var manage_blogger = require('../blogger_model/blogger_add_model');

exports.delete_data = async(req,res) => {
    var id = req.params.id;

    var data = await manage_blogger.findByIdAndDelete(id);

    res.status(200).json({
        status:"data deleted"
    })
}
exports.update_data = async(req,res) => {
    var id = req.params.id;
    // console.log('form-data',req.params.id);
    var data = await manage_blogger.findByIdAndUpdate(id,req.body);
    // console.log(data);
    
    res.status(200).json({
        status:"data update"
    })
    
}
