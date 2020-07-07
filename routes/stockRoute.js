const router = require('express').Router()
const bookController = require('../controllers/stockController')

router.get('/', bookController.getAll)

module.exports = router