const StockModel = require('../models/stockModel');

exports.getAll = (req, res) => 
    StockModel.getAll((error, results, fields) => formatDataAndResponse(req, res, error, results))

exports.getById = (req, res) =>
    StockModel.getByID(req.query.value, (error, results, fields) => formatDataAndResponse(req, res, error, results))

exports.insert = (req, res) => {

    var newStock = new StockModel(
        req.query.book_id   ||null, 
        req.query.amount    ||null,
        req.query.shelve    ||null,
        req.query.next_date ||null,
        req.query.last_date ||null
    )

    newAuthor.save((error, results, fields) => {
       if (error) throw error
       res.json(results)   
   })
}

var formatDataAndResponse = (req, res, error, rawData) => {
    if (error) throw error

    const responeData = rawData.map(item => {   
        return {
            book_id:    item.book_id,
            amount:     item.amount,
            shelve:     item.shelve,    
            next_date:  item.next_date,  
            last_date:  item.last_date
        }
    })

    res.json(responeData)
}