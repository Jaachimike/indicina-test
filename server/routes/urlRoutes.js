const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

// Route to encode URL
router.post('/encode', urlController.encodeUrl);

// Route to get all shortened URL data
router.get('/data', urlController.getAllData);

// Route to open short link to accurate original link 
router.get('/:shortUrlId', urlController.redirectToOriginalUrl);

// Route to decode shortened URL
router.post('/decode', urlController.decodeShortenedUrl);

// Route to get URL statistics
router.get('/statistic/:shortUrl', urlController.getStatistics);


module.exports = router;