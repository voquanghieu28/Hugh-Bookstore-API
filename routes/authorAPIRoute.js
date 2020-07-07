const router = require('express').Router()
const authorAPIController = require('../controllers/authorAPIController')

router.get('/', authorAPIController.getAll)
router.get('/id', authorAPIController.getById)
router.get('/name', authorAPIController.getByName)
router.get('/insert', authorAPIController.insert)

module.exports = router