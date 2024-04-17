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

//get all shortened url data 
router.get('/data', async (req, res) => {
    try {
        // Fetch data using Mongoose
        const data = await Url.find();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
})

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
router.post('/decode', async (req, res) => {
    const { shortenedUrl } = req.body;
    const shortenedUrlId = shortenedUrl.slice(-9)
    try {
        // Find URL in database based on the short URL
        const foundUrl = await Url.findOne({ shortUrl: shortenedUrlId });


        if (!foundUrl) {
            return res.status(404).json({ error: 'URL not found' });
        }
        // Redirect to the original URL
        res.json(foundUrl.originalUrl);
    } catch (error) {
        console.error('Error fetching original URL:', error);
        res.status(500).json({ error: 'Server error' });
    }

});

// Route to get URL statistics
router.get('/statistic/:shortUrl', async (req, res) => {
    // Add functionality to retrieve statistics for the short URL
    try {
        const shortUrl = req.params.shortUrl;
        // console.log(shortUrl);

        // Use Mongoose to query statistics based on the short URL
        const statistics = await Url.findOne({ shortUrl: shortUrl });

        if (!statistics) {
            return res.status(404).json({ error: 'Statistics not found' });
        }

        res.json(statistics);
    } catch (error) {
        console.error('Error fetching statistics:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;