const router = require('express').Router()
const authorController = require('../controllers/authorController')

router.get('/', authorController.getAll)

module.exports = router