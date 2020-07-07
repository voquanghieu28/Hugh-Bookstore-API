const router = require('express').Router()

const bookAPIRoute = require ('./bookAPIRoute')
const publisherAPIRoute = require ('./publisherAPIRoute')
const authorAPIRoute = require ('./authorAPIRoute')
const stockAPIRoute = require('./stockAPIRoute')

const bookRoute = require('./bookRoute')
const authorRoute = require('./authorRoute')
const publisherRoute = require('./publisherRoute.js')
const stockRoute = require('./stockRoute')
const shopRoute = require('./shopRoute')

router.use('/api/book', bookAPIRoute)
router.use('/api/publisher', publisherAPIRoute)
router.use('/api/author', authorAPIRoute)
router.use('/api/stock', stockAPIRoute)

router.use('/', shopRoute)
router.use('/book', bookRoute)
router.use('/author', authorRoute)
router.use('/publisher', publisherRoute)
router.use('/stock', stockRoute)
router.use('/shop', shopRoute)

module.exports = router