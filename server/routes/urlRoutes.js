const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const shortid = require('shortid');

// Route to encode URL
router.post('/encode', async (req, res) => {
    const { originalUrl } = req.body;

    try {

        // Generate short URL ID
        const shortUrlId = shortid.generate();

        // Save to database
        const url = new Url({
            originalUrl,
            shortUrl: shortUrlId,
        });
        await url.save();

        res.status(201).json(url);
    } catch (error) {
        console.error('Error encoding URL:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

//Route to open short link to accurate original link 
router.get('/:shortUrlId', async (req, res) => {
    const { shortUrlId } = req.params;


    try {
        // Find URL in database based on the short URL
        const shortUrl = await Url.findOne({ shortUrl: shortUrlId });


        if (!shortUrl) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        // Increment click count (if needed)
        shortUrl.clicks++;
        shortUrl.save();

        // Redirect to the original URL
        res.json(shortUrl);
    } catch (error) {
        console.error('Error redirecting to original URL:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Route to decode shortened URL
router.get('/:shortUrl', async (req, res) => {
    // Add functionality to decode the short URL and redirect to the original URL
});

// Route to get URL statistics
router.get('/:shortUrl/stats', async (req, res) => {
    // Add functionality to retrieve statistics for the short URL
});

module.exports = router;