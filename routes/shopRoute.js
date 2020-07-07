const router = require('express').Router()
const shopController = require('../controllers/shopController')

router.get('/', shopController.getAll)

module.exports = router