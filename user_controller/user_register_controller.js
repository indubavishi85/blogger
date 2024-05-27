var user_reg = require('../user_model/user_register_model');

exports.insert = async (req, res) => {
    
    var data = await user_reg.create(req.body);

    res.status(200).json({
        status: "data insert",
        data
    })
}

exports.get_data = async (req, res) => {
    var data = await user_reg.find();

    res.status(200).json({
        status: "data select",
        data
    })
}