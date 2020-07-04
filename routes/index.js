const router = require('express').Router()

const bookAPIRoute = require ('./bookAPIRoute')
const publisherAPIRoute = require ('./publisherAPIRoute')
const authorAPIRoute = require ('./authorAPIRoute')
const stockAPIRoute = require('./stockAPIRoute')



router.use('/api/book', bookAPIRoute)
router.use('/api/publisher', publisherAPIRoute)
router.use('/api/author', authorAPIRoute)
router.use('/api/stock', stockAPIRoute)



module.exports = router;