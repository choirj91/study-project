const express = require('express');
const router = express.Router();

// controllers
const { DataStructureController } = require('../controllers');

router.get('/', DataStructureController.arrayStudy);

module.exports = router;