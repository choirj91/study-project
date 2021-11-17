const express = require('express');
const router = express.Router();

// controllers
const { SortAlgorithmController } = require('../controllers');

router.get('/selection', SortAlgorithmController.selectionSort);
router.get('/bubble', SortAlgorithmController.bubbleSort);

module.exports = router;