const express = require('express');
const router = express.Router();

// import controller
const { CasheController } = require('../controllers/index');

router.get('/', CasheController.casheTest);

module.exports = router;