const PublisherModel = require('../models/publisherModel')

exports.getAll = (req, res) => 
    PublisherModel.getAll((error, results, fields) => formatDataAndResponse(req, res, error, results))


exports.getById = (req, res) => 
    PublisherModel.getByID(req.query.value, (error, results, fields) => formatAndResponsePublisher(req, res, error, results))

exports.getByName = (req, res) => 
    PublisherModel.getByName(req.query.value, (error, results, fields) => formatAndResponsePublisher(req, res, error, results))

exports.insert = (req, res) => {
    //console.log(req.query)
    var newPublisher = new PublisherModel(
        req.query.name  ||null, 
        req.query.adress||null,
        req.query.phone ||null
    )

    newPublisher.save((error, results, fields) => {
       if (error) throw error
       res.json(results)   
   })
}

var formatDataAndResponse = (req, res, error, rawData) => {
    if (error) throw error
    
    console.log(rawData)
    const responeData = rawData.map(item => {
        console.log(item)
        console.log('HERE')
        return {
            id:     item.id,
            name:   item.name,
            phone:  item.phone, 
            address: item.address
        }
    })

    res.json(responeData)
    
}


