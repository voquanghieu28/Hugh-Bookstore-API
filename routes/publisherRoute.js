const router = require('express').Router()
const publisherController = require('../controllers/publisherController')

router.get('/', publisherController.getAll)

module.exports = router