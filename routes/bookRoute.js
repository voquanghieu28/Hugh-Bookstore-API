const router = require('express').Router()
const bookController = require('../controllers/bookController')

router.get('/', bookController.getAll)

module.exports = router