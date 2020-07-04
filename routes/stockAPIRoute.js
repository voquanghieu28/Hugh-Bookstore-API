const router = require('express').Router()
const bookController = require('../controllers/stockAPIController')

router.get('/', bookController.getAll)
router.get('/id', bookController.getById)

module.exports = router;