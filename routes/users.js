var express = require('express');
var router = express.Router();


var user_reg = require('../user_controller/user_register_controller');
var user_login = require('../user_controller/user_login_controller');
var view_bloger = require('../user_controller/view_bloger_controller');
var user_like = require('../user_controller/user_like_controller');
var user_comment = require('../user_controller/user_comment_controller');

/* GET users listing. */

// User_Register
router.post('/insert_user_reg',user_reg.insert);
router.get('/view_user_reg',user_reg.get_data);

// User_Login
router.post('/insert_user_login',user_login.insert);
router.get('/view_user_login',user_login.get_data);

router.post('/user_login',user_login.user_login);
router.get('/user_logout',user_login.user_logout);

// View_Blogger
router.get('/view_bloger',view_bloger.get_data);

// User_like
router.post('/insert_like',user_like.insert);
router.get('/view_like',user_like.get_data);

// User_Comment
router.post('/insert_comment',user_comment.insert);
router.get('/view_comment',user_comment.get_data);


module.exports = router;
