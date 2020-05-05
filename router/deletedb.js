const express = require('express');
const router = express.Router();

const controller = require('../controller/controller-delete');

router.delete('/:id', controller.deletedb);

module.exports = router;
