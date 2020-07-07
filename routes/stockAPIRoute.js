const router = require('express').Router()
const bookAPIController = require('../controllers/stockAPIController')

router.get('/', bookAPIController.getAll)
router.get('/id', bookAPIController.getById)

module.exports = router