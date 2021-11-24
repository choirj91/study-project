const express = require('express');
const router = express.Router();

// import controller
const { BaekjoonController } = require('../controllers/index');

router.get('', BaekjoonController.id1);
router.get('/10872', BaekjoonController.id10872);

module.exports = router;