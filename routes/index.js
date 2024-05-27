var express = require('express');
const multer = require('multer');
var router = express.Router();

var admin_login = require('../admin_controller/login_controller');
var add_blog = require('../admin_controller/add_blog_controller');
var view_blog = require('../admin_controller/view_blog_controller');
var manage_blog = require('../admin_controller/manage_blog_controller');
var add_cate = require('../admin_controller/add_blog_category_controller');
var view_cate = require('../admin_controller/view_category_controller');
var manage_cate = require('../admin_controller/manage_category_controller');
var single_view = require('../admin_controller/singale_view_blog_controller');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })

/* GET home page. */


// Admin_Login
router.post('/admin_insert',admin_login.insert);
router.get('/',admin_login.get_data);

router.post('/login',admin_login.login);
router.get('/logout',admin_login.logout);

// Add_Blog
router.post('/insert_blog',upload.single('image'),add_blog.insert);

// View_Blog
router.get('/view_blog',view_blog.get_data);

// Manage_Blog
router.get('/delete_blog/:id',manage_blog.delete_data);
router.post('/update_blog/:id',manage_blog.update_data);

// Add_Category
router.post('/insert_category',upload.single('image'),add_cate.insert);

// View_Blog
router.get('/view_cate',view_cate.get_data);

// Manage_Category
router.get('/delete_cate/:id',manage_cate.delete_data);
router.post('/update_cate/:id',manage_cate.update_data);

// Singale_view
router.get('/single_blog_view/:id',single_view.view_data);


module.exports = router;
