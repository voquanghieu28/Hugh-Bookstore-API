const router = require('express').Router()
const bookController = require('../controllers/bookAPIController')

router.get('/', bookController.getAll)
router.get('/id', bookController.getById)
router.get('/name', bookController.getByName)
router.get('/insert', bookController.insert)
router.get('/criteria', bookController.getByCriteria)

module.exports = router;