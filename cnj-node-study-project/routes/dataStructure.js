const express = require('express');
const router = express.Router();

// controllers
const { DataStructureController } = require('../controllers');

router.get('/array', DataStructureController.arrayStudy);
router.get('/linked-list', DataStructureController.linkedListStudy);
router.get('/stack', DataStructureController.stackStudy);
router.get('/queue', DataStructureController.queueStudy);
router.get('/deque', DataStructureController.dequeStudy);
router.get('/binary-search-tree', DataStructureController.binarySearchTree);
router.get('/list-gragh', DataStructureController.adjacencyListGragh);
router.get('/matrix-gragh', DataStructureController.adjacencyMatrixGragh);

module.exports = router;