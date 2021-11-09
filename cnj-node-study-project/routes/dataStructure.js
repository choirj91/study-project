const express = require('express');
const router = express.Router();

// controllers
const { DataStructureController } = require('../controllers');

router.get('/array', DataStructureController.arrayStudy);
router.get('/linked-list', DataStructureController.linkedListStudy);

module.exports = router;