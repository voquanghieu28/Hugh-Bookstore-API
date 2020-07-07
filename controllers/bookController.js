const BookModel = require('../models/bookModel')
const baseURL = require('../utils/getBaseURL')
const projectPath = require('../utils/path')

const path = require('path')
const fs = require('fs')

exports.getAll = (req, res) => 
    BookModel.getAll((error, results, fields) => formatDataAndResponse(req, res, error, results))

exports.getById = (req, res) => 
    BookModel.getByID(req.query.value, (error, results, fields) => formatDataAndResponse(req, res, error, results))

exports.getByName = (req, res) => 
    BookModel.getByName(req.query.value, (error, results, fields) => formatDataAndResponse(req, res, error, results))

exports.getByCriteria = (req, res) => 
    BookModel.getByCriteria(req.query, (error, results, fields) => formatDataAndResponse(req, res, error, results))


exports.insert = (req, res) => {
    console.log(req.query)
    const newBook = new BookModel(req.query.name || null,
        req.query.barcode       || null, 
        req.query.publish_date  || null, 
        req.query.price         || null, 
        req.query.author_id     || null, 
        req.query.publisher_id  || null,
        req.query.image_name    || null,
        req.query.video_name    || null,
        req.query.summary       || null
    )

    newBook.save((error, results, fields) => {
       if (error) throw error
       res.json(results)   
   })
}

var formatDataAndResponse = (req, res,error, rawData) => {
    if (error) throw error

    const responeData = rawData.map(item => {
        
        const imageURL = baseURL(req)+'images/'+item.image_file        
        const videoURL = baseURL(req)+'videos/'+item.review_video_file
        const summary = fs.readFileSync(path.join(  projectPath, 'data', 'summary',  item.summary_file), {encoding:'utf8', flag:'r'})
        
        const dateConverted = new Date(item.publish_date).toLocaleDateString()
        return {
            id:                 item.id,
            name:               item.name,           
            price:              item.price,
            barcode:            item.barcode,
            author_name:        item.author_name,
            publisher_name:     item.publisher_name,
            publish_date:       dateConverted, 
            image_url:          imageURL,
            review_video_url:   videoURL,
            summary:            summary
        }
    })
    
    res.render('book', {
        page : 'Book',
        data : responeData
    })
}