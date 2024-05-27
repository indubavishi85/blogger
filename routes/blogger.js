var express = require('express');
const multer = require('multer');
var router = express.Router();

// Blogger
var reg_blogger = require('../blogger_controller/register_controller');
var blogger_login = require('../blogger_controller/blogger_login_controller');
var add_blogger = require('../blogger_controller/blogger_add_controller');
var view_blogger = require('../blogger_controller/blogger_view_controller');
var manage_blogger = require('../blogger_controller/blogger_magane_controller');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  var upload = multer({ storage: storage })

  /* GET users listing. */

// Blogger_register
router.post('/reg_insert',reg_blogger.insert);
router.get('/reg_blogger',reg_blogger.get_data);

// Blogger_Login
router.post('/blogger_insert',blogger_login.insert);
router.get('/',blogger_login.get_data);

router.post('/blogger_login',blogger_login.blog_login);
router.get('/blogger_logout',blogger_login.blog_logout);

// Add_Blogger
router.post('/insert_blogger',upload.single('image'),add_blogger.insert);

// View_Blogger
router.get('/view_blogger',view_blogger.get_data);

// Manage_Blogger
router.get('/delete_blogger/:id',manage_blogger.delete_data);
router.post('/update_blogger/:id',manage_blogger.update_data);


module.exports = router;