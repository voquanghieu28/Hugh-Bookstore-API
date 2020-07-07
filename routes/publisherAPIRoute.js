const router = require('express').Router()
const publisherAPIController = require('../controllers/publisherAPIController')

router.get('/', publisherAPIController.getAll)
//router.get('/id', publisherController.getById)
//router.get('/name', publisherController.getByName)
//router.get('/insert', publisherController.insert)

module.exports = router;