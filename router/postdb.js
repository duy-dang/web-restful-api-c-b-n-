const express = require('express');

const router = express.Router();

const controller = require('../controller/controller-postdb');
router.get('/', function(req,res,next){
    res.render('addfile/addfile');
})
router.post('/',controller.postdb);

module.exports = router;