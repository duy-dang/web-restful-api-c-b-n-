const express = require('express');

const router = express.Router();

const controller = require('../controller/controller-getdb');

router.get('/', controller.getdb );

module.exports = router;