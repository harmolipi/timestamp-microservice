const express = require('express');
const router = express.Router();

const api_controller = require('../controllers/apiController');

router.get('/:date?', api_controller.get_date);

module.exports = router;
