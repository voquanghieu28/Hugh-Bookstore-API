const router = require('express').Router()
const bookAPIController = require('../controllers/bookAPIController')

router.get('/', bookAPIController.getAll)
router.get('/id', bookAPIController.getById)
router.get('/name', bookAPIController.getByName)
router.get('/insert', bookAPIController.insert)
router.get('/criteria', bookAPIController.getByCriteria)

module.exports = router