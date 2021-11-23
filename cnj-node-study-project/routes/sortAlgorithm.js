const express = require('express');
const router = express.Router();

// controllers
const { SortAlgorithmController } = require('../controllers');

router.get('/selection', SortAlgorithmController.selectionSort);
router.get('/bubble', SortAlgorithmController.bubbleSort);
router.get('/insertion', SortAlgorithmController.insertionSort);
router.get('/shell', SortAlgorithmController.shellSort);
router.get('/heap', SortAlgorithmController.heapSort);
router.get('/merge', SortAlgorithmController.mergeSort);
router.get('/', SortAlgorithmController.allSort);

module.exports = router;