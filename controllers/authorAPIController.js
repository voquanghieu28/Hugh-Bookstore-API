const AuthorModel = require('../models/authorModel');

exports.getAll = (req, res) => 
    AuthorModel.getAll((error, results, fields) => formatDataAndResponse(req, res, error, results))

exports.getById = (req, res) => 
    AuthorModel.getByID(req.query.value, (error, results, fields) => formatDataAndResponse(req, res, error, results))

exports.getByName = (req, res) => 
    AuthorModel.getByName(req.query.value, (error, results, fields) => formatDataAndResponse(req, res, error, results))

exports.insert = (req, res) => {
    //console.log(req.query)
    var newAuthor = new AuthorModel(req.query.name||null, req.query.main_category||null)

    newAuthor.save((error, results, fields) => {
       if (error) throw error
       res.json(results)   
   })
}

var formatDataAndResponse = (req, res, error, rawData) => {
    if (error) throw error

    const responeData = rawData.map(item => {   
        return {
            id:                 item.id,
            name:               item.name,
            main_category:      item.main_category,    
        }
    })

    res.json(responeData)
    
}