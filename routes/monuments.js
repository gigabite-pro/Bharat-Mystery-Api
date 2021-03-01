const router = require('express').Router();
const monumentService = require('../services/monumentsService')

router.get('/monuments', (req, res) => {
	monumentService.getMonument(req,res);
});

router.get('/allmonuments', (req,res) => {
	monumentService.getAll(req,res);
})

router.get('/quiz', (req,res) => {
	monumentService.getQuiz(req,res);
})

module.exports = router;