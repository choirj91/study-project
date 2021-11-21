const express = require('express');
const router = express.Router();

// import controller
const { BaekjoonController } = require('../controllers/index');

router.get('', BaekjoonController.id1);

module.exports = router;