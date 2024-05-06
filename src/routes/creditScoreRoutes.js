const express = require('express');
const router = express.Router();
const creditScoreController = require('../controller/creditScoreController');

router.post('/', creditScoreController.calculateCreditScore);

module.exports = router;
