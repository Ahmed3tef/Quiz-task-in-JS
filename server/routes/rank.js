const express = require('express');
const router = express.Router();

const rankController = require('../controllers/rank');

router.post('/', rankController.getRank);

module.exports = router;
