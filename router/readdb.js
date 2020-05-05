const express = require('express');
const router = express.Router();

const controller = require('../controller/controller-readdb');

router.get('/:id', controller.readdb);

module.exports = router;