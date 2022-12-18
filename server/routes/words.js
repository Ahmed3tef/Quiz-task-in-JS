const express = require('express');

const wordsController = require('../controllers/words');

const router = express.Router();

// GET /feed/posts
router.get('/', wordsController.getWords);

module.exports = router;
