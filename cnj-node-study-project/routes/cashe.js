const express = require('express');
const router = express.Router();

// import controller
const { CasheController } = require('../controllers/index');

router.get('/last-modified', CasheController.lastModified);
router.get('/etag', CasheController.etag);
router.get('/no-cache', CasheController.noCache);

module.exports = router;