const express= require("express");

const router = express.Router();
const controller = require('../controller/controller-putdb');

router.put('/:id', controller.putdb)

module.exports = router;
