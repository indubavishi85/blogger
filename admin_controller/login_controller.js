var admin_login = require('../admin_model/login_model');

login_status=0;

exports.insert = async (req,res) =>{
    var data =await admin_login.create(req.body);

    res.status(200).json({
        status:"data insert",
        data
    })
}

exports.get_data = async (req,res) =>{
    var data =await admin_login.find();

    res.status(200).json({
        status:"data select",
        data
    })
}
exports.login = async(req,res)=>{
    var data = await admin_login.find({"email":req.body.email});

    if(login_status==0)
    {
        if(data.length==1)
        {
            if(data[0].password==req.body.password)
            {
                login_status=1;
                res.status(200).json({
                    status:"login success"
                })
            }
            else
            {
                res.status(200).json({
                    status:"check your email and password"
                })
            }
        }
        else
        {
            res.status(200).json({
                status:"check your email and password"
            })
        }
    }
    else
    {
        res.status(200).json({
            status:"user is already login"
        })
    }
}
exports.logout = async(req,res) =>{
    login_status=0;
    res.status(200).json({
        status:"user logout"
    })
}