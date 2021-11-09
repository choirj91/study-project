const express = require('express');
const router = express.Router();

// import controller
const { ClassStudyController } = require('../controllers/index');

router.get('/', ClassStudyController.classStudy);

module.exports = router;