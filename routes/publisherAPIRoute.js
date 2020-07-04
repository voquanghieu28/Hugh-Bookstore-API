const router = require('express').Router()
const publisherController = require('../controllers/publisherAPIController')

router.get('/', publisherController.getAll)
//router.get('/id', publisherController.getById)
//router.get('/name', publisherController.getByName)
//router.get('/insert', publisherController.insert)

module.exports = router;