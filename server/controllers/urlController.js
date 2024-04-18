const Url = require('../models/Url');
const shortid = require('shortid');

exports.encodeUrl = async (req, res) => {
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
        // console.error('Error encoding URL:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAllData = async (req, res) => {
    try {
        // Fetch data using Mongoose
        const data = await Url.find({}, { originalUrl: 1, shortUrl: 1 });
        if (!data) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
};

exports.redirectToOriginalUrl = async (req, res) => {
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
        res.status(200).json(shortUrl);
    } catch (error) {
        console.error('Error redirecting to original URL:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.decodeShortenedUrl = async (req, res) => {
    const { shortenedUrl } = req.body;

    // Check if shortenedUrl is defined
    if (!shortenedUrl) {
        return res.status(400).json({ error: 'Shortened URL is missing in the request body' });
    }

    try {
        const shortenedUrlId = shortenedUrl.slice(-9)
        // Find URL in database based on the short URL
        const foundUrl = await Url.findOne({ shortUrl: shortenedUrlId });
        res.status(200).json(foundUrl.originalUrl);
    } catch (error) {
        // console.error('Error fetching original URL:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getStatistics = async (req, res) => {
    try {
        const shortUrl = req.params.shortUrl;
        // Use Mongoose to query statistics based on the short URL
        const statistics = await Url.findOne({ shortUrl: shortUrl });
        if (!statistics) {
            return res.status(404).json({ error: "Statistics not found" });
        }
        res.status(200).json(statistics);
    } catch (error) {
        console.error('Error fetching statistics:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};