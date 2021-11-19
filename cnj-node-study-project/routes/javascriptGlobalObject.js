const express = require('express');
const router = express.Router();

// controllers
const { GlobalObjectsController } = require('../controllers');

router.get('/array', GlobalObjectsController.arrayObjects);

module.exports = router;