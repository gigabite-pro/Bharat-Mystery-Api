const router = require('express').Router();
const monumentService = require('../services/monumentsService')

router.get('/monuments', (req, res) => {
	monumentService.getMonument(req,res);
});

module.exports = router;