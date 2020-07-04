const router = require('express').Router()
const authorController = require('../controllers/authorAPIController')

router.get('/', authorController.getAll)
router.get('/id', authorController.getById)
router.get('/name', authorController.getByName)
router.get('/insert', authorController.insert)

module.exports = router;